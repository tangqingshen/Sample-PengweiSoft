import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Samples } from './samples';

@NgModule({
  declarations: [
    Samples,
  ],
  imports: [
    IonicPageModule.forChild(Samples),
  ],
  exports: [
    Samples
  ]
})
export class AboutModule { }
