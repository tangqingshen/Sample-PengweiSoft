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

  ionViewDidLoad() {}

  getPicture() {
    var options = {
            destinationType: Camera.DestinationType.FILE_URI
        };
    var that = this;
    Camera.getPicture(options).then((imageData) => {
      if (imageData.startsWith('file:///')) {
        //image url
        that.filepath = imageData;
        File.resolveLocalFilesystemUrl(imageData).then((entry) => {
          that.entry = JSON.stringify(entry);
          entry.getMetadata((metaData) => {
            that.ocrService.getInfo({ filepath: imageData, filesize: metaData.size }).then((cardinfo) => {
              that.cardinfo = JSON.stringify(cardinfo);
            }, (err)=>{
              that.error = JSON.stringify(err);
            });
          })
        })
      } else {
        // err 
        that.error = "文件路径格式不正确";
      }
    }, (err) => {
      // Handle error
      that.error = JSON.stringify(err);
    });
  }
}
