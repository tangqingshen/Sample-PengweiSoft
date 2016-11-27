import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { File } from 'ionic-native';
import { OcrService } from '../../app/ocr.service';

/*
  Generated class for the SampleScancard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample-scancard',
  templateUrl: 'sample-scancard.html'
})
export class ScanCardPage {

  public filepath;
  public entry;
  public cardinfo; 
  public error;

  constructor(public navCtrl: NavController, private ocrService: OcrService) { }

  ionViewDidLoad() {

  }

  getPicture() {
    var options = {
            destinationType: Camera.DestinationType.FILE_URI
        };

    Camera.getPicture(options).then((imageData) => {
      if (imageData.startsWith('file:///')) {
        //image url
        this.filepath = imageData;
        File.resolveLocalFilesystemUrl(imageData).then((entry) => {
          this.entry = JSON.stringify(entry);
          entry.getMetadata((metaData) => {
            this.ocrService.getInfo({ filepath: imageData, filesize: metaData.size }).then((cardinfo) => {
              this.cardinfo = JSON.stringify(cardinfo);
            }, (err)=>{
              this.error = JSON.stringify(err);
            });
          })
        })
      } else {
        // err 
        this.error = "文件路径格式不正确";
      }
    }, (err) => {
      // Handle error
      this.error = JSON.stringify(err);
    });
  }
}
