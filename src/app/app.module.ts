import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SamplesPage } from '../pages/samples/samples';
import { HomePage } from '../pages/home/home';
import { ScanCardPage } from '../pages/sample-scancard/sample-scancard';
import { TabsPage } from '../pages/tabs/tabs';
import { OcrService } from './ocr.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    SamplesPage,
    ScanCardPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    SamplesPage,
    ScanCardPage,
    HomePage,
    TabsPage
  ],
  providers: [OcrService]
})
export class AppModule {}
