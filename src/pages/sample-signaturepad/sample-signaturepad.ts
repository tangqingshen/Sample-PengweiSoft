import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/*
  Generated class for the SampleSignaturepad page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-sample-signaturepad',
  templateUrl: 'sample-signaturepad.html'
})
export class SampleSignaturepad {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild('contentEl') contentEl: ElementRef;

  imageData: String;
  isEmpty = true;

  // tslint:disable-next-line:no-unused-variable
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasHeight': 200
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    // this.signaturePad is now available
    this.signaturePad.set('canvasWidth', this.contentEl.nativeElement.offsetWidth); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.isEmpty = true;
  }

  save() {
    this.imageData = this.signaturePad.toDataURL();
  }

  empty() {
    this.signaturePad.clear();
  }
}
