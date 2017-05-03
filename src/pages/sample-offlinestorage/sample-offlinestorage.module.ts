import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleOfflineStorage } from './sample-offlinestorage';

@NgModule({
  declarations: [
    SampleOfflineStorage,
  ],
  imports: [
    IonicPageModule.forChild(SampleOfflineStorage),
  ],
  exports: [
    SampleOfflineStorage
  ]
})
export class AboutModule { }
