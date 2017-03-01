import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

/*
  Generated class for the SampleBarcodeScanner page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample-barcode-scanner',
  templateUrl: 'sample-barcode-scanner.html'
})
export class BarcodeScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  result: string;

  ionViewDidLoad() {

  }

  scan() {
    BarcodeScanner.scan({
      showFlipCameraButton: true,
      showTorchButton: true
    }).then((barcodeData) => {
      // Success! Barcode data is here
      this.result = JSON.stringify(barcodeData);
    }, (err) => {
      // An error occurred
      this.result = err;
    });
  }

} 