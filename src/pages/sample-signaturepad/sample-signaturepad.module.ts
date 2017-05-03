import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SampleSignaturepad } from './sample-signaturepad';

@NgModule({
  declarations: [
    SampleSignaturepad,
  ],
  imports: [
    SignaturePadModule,
    IonicPageModule.forChild(SampleSignaturepad),
  ],
  exports: [
    SampleSignaturepad
  ]
})
export class AboutModule { }
