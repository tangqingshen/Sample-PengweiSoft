import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleBarcodeScanner } from './sample-barcode-scanner';

@NgModule({
  declarations: [
    SampleBarcodeScanner,
  ],
  imports: [
    IonicPageModule.forChild(SampleBarcodeScanner),
  ],
  exports: [
    SampleBarcodeScanner
  ]
})
export class AboutModule { }
