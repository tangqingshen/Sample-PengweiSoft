import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleActionSheet } from './sample-action-sheet';

@NgModule({
  declarations: [
    SampleActionSheet,
  ],
  imports: [
    IonicPageModule.forChild(SampleActionSheet),
  ],
  exports: [
    SampleActionSheet
  ]
})
export class AboutModule { }
