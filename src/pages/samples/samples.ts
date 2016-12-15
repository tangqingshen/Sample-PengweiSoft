import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanCardPage } from '../sample-scancard/sample-scancard';
import { OfflineStoragePage } from '../sample-offlinestorage/sample-offlinestorage';

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
    }
  }

}
