import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleScanCard } from './sample-scancard';

@NgModule({
  declarations: [
    SampleScanCard,
  ],
  imports: [
    IonicPageModule.forChild(SampleScanCard),
  ],
  exports: [
    SampleScanCard
  ]
})
export class AboutModule { }
