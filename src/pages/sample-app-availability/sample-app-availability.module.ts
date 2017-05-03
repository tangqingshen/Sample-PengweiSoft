import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleAppAvailability } from './sample-app-availability';

@NgModule({
  declarations: [
    SampleAppAvailability,
  ],
  imports: [
    IonicPageModule.forChild(SampleAppAvailability),
  ],
  exports: [
    SampleAppAvailability
  ]
})
export class AboutModule { }
