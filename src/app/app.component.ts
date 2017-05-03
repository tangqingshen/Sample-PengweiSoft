import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar'; 

@Component({
  templateUrl: 'app.html',
  providers: [SplashScreen, StatusBar]
})
export class MyApp {
  rootPage = "Tabs";

  constructor(platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
