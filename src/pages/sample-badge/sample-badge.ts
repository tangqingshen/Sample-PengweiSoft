import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Badge } from 'ionic-native';

/*
  Generated class for the Badge page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-sample-badge',
  templateUrl: 'sample-badge.html'
})
export class SampleBadge {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  badge: number;

  ionViewDidLoad() {
    
  }

  setBadge(){
    Badge.set(this.badge);
  }

  clearBadge(){
    Badge.clear();
  }

}
