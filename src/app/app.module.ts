import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SamplesPage } from '../pages/samples/samples';
import { HomePage } from '../pages/home/home';
import { ScanCardPage } from '../pages/sample-scancard/sample-scancard';
import { OfflineStoragePage, ModalCreateTodoPage, ModalEditTodoPage } from '../pages/sample-offlinestorage/sample-offlinestorage';
import { TabsPage } from '../pages/tabs/tabs';
import { ActionSheetPage } from '../pages/sample-action-sheet/sample-action-sheet';
import { AppAvailabilityPage } from '../pages/sample-app-availability/sample-app-availability';
import { BadgePage } from '../pages/sample-badge/sample-badge';

import { OcrService } from './ocr.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    SamplesPage,
    HomePage,
    TabsPage,
    ScanCardPage,
    OfflineStoragePage,
    ModalCreateTodoPage,
    ModalEditTodoPage,
    ActionSheetPage,
    AppAvailabilityPage,
    BadgePage
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
    HomePage,
    TabsPage,
    ScanCardPage,
    OfflineStoragePage,
    ModalCreateTodoPage,
    ModalEditTodoPage,
    ActionSheetPage,
    AppAvailabilityPage,
    BadgePage
  ],
  providers: [OcrService, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
