import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AppVersion } from 'ionic-native';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public appName: String;
  public version: String;

  constructor(public navCtrl: NavController, public platform: Platform) {
    if (this.platform.is("mobileweb") || this.platform.is("core")) {
      this.appName = "null";
      this.version = "null";
    } else {
      AppVersion.getAppName().then((name: String)=>{
        this.appName = name;
      });

      AppVersion.getVersionCode().then((version: String)=>{
        this.version = version;
      });
    }
  }

}
