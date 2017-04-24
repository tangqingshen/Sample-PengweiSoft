import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanCardPage } from '../sample-scancard/sample-scancard';
import { OfflineStoragePage } from '../sample-offlinestorage/sample-offlinestorage';
import { ActionSheetPage } from '../sample-action-sheet/sample-action-sheet';
import { AppAvailabilityPage } from '../sample-app-availability/sample-app-availability';
import { BadgePage } from '../sample-badge/sample-badge';
import { BarcodeScannerPage } from '../sample-barcode-scanner/sample-barcode-scanner';
import { SignaturepadPage } from '../sample-signaturepad/sample-signaturepad';

/*
  Generated class for the Samples page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-samples',
  templateUrl: 'samples.html'
})
export class SamplesPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {

  }

  itemSelected(item) {
    if (item == "scanCard") {
      this.navCtrl.push(ScanCardPage);
    } else if (item == "offlineStorage") {
      this.navCtrl.push(OfflineStoragePage);
    } else if (item == "actionsheet") {
      this.navCtrl.push(ActionSheetPage);
    } else if (item == "appavailability") {
      this.navCtrl.push(AppAvailabilityPage);
    } else if (item == "badge") {
      this.navCtrl.push(BadgePage);
    } else if (item == "barcodescanner") {
      this.navCtrl.push(BarcodeScannerPage);
    } else if (item == "signaturepad") {
      this.navCtrl.push(SignaturepadPage);
    }
  }

}
