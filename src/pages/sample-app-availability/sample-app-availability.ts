import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AppAvailability } from 'ionic-native';

/*
  Generated class for the SampleAppAvailability page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample-app-availability',
  templateUrl: 'sample-app-availability.html'
})
export class AppAvailabilityPage {

  constructor(public navCtrl: NavController, public platform: Platform) { }

  ionViewDidLoad() { }

  checkWechat() {
    if (this.platform.is("core") || this.platform.is("mobileweb")) {
      alert("请在真实设备中运行");
    } else {
      let app;
      if (this.platform.is("ios")) {
        app = "wechat://";
      } else if (this.platform.is("android")) {
        app = "com.tencent.mm";
      }

      AppAvailability.check(app).then((yes: boolean) => {
        alert("检测到微信")
      }, (no: any) => {
        alert("未检测到微信")
      });
    }
  }

  checkQQ() {
    if (this.platform.is("core") || this.platform.is("mobileweb")) {
      alert("请在真实设备中运行");
    } else {
      let app;
      if (this.platform.is("ios")) {
        app = "mqq://";
      } else if (this.platform.is("android")) {
        app = "com.tencent.mobileqq";
      }

      AppAvailability.check(app).then((yes: boolean) => {
        alert("检测到QQ")
      }, (no: any) => {
        alert("未检测到QQ")
      });
    }
  }

}
