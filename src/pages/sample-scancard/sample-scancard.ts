import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { OcrService } from '../../app/ocr.service';

/*
  Generated class for the SampleScancard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-sample-scancard',
  templateUrl: 'sample-scancard.html',
  providers: [File, Camera]
})
export class SampleScanCard {

  public filepath;
  public entry;
  public cardinfo;
  public error;

  constructor(public navCtrl: NavController, private ocrService: OcrService, private file: File, private camera: Camera) { }

  ionViewDidLoad() { }

  getPicture() {
    var options = {
      destinationType: this.camera.DestinationType.FILE_URI
    };
    var that = this;
    this.camera.getPicture(options).then((imageData) => {
      if (imageData.startsWith('file:///')) {
        //image url
        that.filepath = imageData;
        this.file.resolveLocalFilesystemUrl(imageData).then((entry) => {
          that.entry = JSON.stringify(entry);
          entry.getMetadata((metaData) => {
            that.ocrService.getInfo({ filepath: imageData, filesize: metaData.size }).then((cardinfo) => {
              that.cardinfo = JSON.stringify(cardinfo);
            }, (err) => {
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
