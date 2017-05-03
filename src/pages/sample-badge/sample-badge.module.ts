import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleBadge } from './sample-badge';

@NgModule({
  declarations: [
    SampleBadge,
  ],
  imports: [
    IonicPageModule.forChild(SampleBadge),
  ],
  exports: [
    SampleBadge
  ]
})
export class AboutModule { }
