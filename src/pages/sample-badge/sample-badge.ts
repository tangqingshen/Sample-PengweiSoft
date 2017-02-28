import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Badge } from 'ionic-native';

/*
  Generated class for the Badge page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample-badge',
  templateUrl: 'sample-badge.html'
})
export class BadgePage {

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
