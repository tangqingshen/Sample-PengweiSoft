import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular'; 

/*
  Generated class for the Samples page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-samples',
  templateUrl: 'samples.html'
})
export class Samples {

  constructor(public navCtrl: NavController) { }

  itemSelected(item) {
    if (item == "scanCard") {
      this.navCtrl.push("SampleScanCard");
    } else if (item == "offlineStorage") {
      this.navCtrl.push("SampleOfflineStorage");
    } else if (item == "actionsheet") {
      this.navCtrl.push("SampleActionSheet");
    } else if (item == "appavailability") {
      this.navCtrl.push("SampleAppAvailability");
    } else if (item == "badge") {
      this.navCtrl.push("SampleBadge");
    } else if (item == "barcodescanner") {
      this.navCtrl.push("SampleBarcodeScanner");
    } else if (item == "signaturepad") {
      this.navCtrl.push("SampleSignaturepad");
    }
  }

}
