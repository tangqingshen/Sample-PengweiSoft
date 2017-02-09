import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';
import { ActionSheet } from 'ionic-native';

/*
  Generated class for the SampleActionSheet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample-action-sheet',
  templateUrl: 'sample-action-sheet.html'
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public platform: Platform) { }

  ionViewDidLoad() { }

  showActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  showNativeActionSheet() {

    console.log(this.platform.platforms());

    if (this.platform.is("mobileweb") || this.platform.is("core")) {
      alert("请在真实设备中运行");
    } else {
      let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
      ActionSheet.show({
        'title': 'What do you want with this image?',
        'buttonLabels': buttonLabels,
        'addCancelButtonWithLabel': 'Cancel',
        'addDestructiveButtonWithLabel': 'Delete'
      }).then((buttonIndex: number) => {
        console.log('Button pressed: ' + buttonIndex);
      });
    }
  }
}
