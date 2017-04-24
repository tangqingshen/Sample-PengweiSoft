import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SignaturePadModule } from 'angular2-signaturepad';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SamplesPage } from '../pages/samples/samples';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ScanCardPage } from '../pages/sample-scancard/sample-scancard';
import { OfflineStoragePage } from '../pages/sample-offlinestorage/sample-offlinestorage';
import { ModalCreateTodoPage } from '../pages/sample-offlinestorage/modal-createtodo';
import { ModalEditTodoPage } from '../pages/sample-offlinestorage/modal-edittodo';
import { ActionSheetPage } from '../pages/sample-action-sheet/sample-action-sheet';
import { AppAvailabilityPage } from '../pages/sample-app-availability/sample-app-availability';
import { BadgePage } from '../pages/sample-badge/sample-badge';
import { BarcodeScannerPage } from '../pages/sample-barcode-scanner/sample-barcode-scanner';
import { SignaturepadPage } from '../pages/sample-signaturepad/sample-signaturepad';

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
    BadgePage,
    BarcodeScannerPage,
    SignaturepadPage
  ],
  imports: [
    HttpModule,
    SignaturePadModule,
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
    BadgePage,
    BarcodeScannerPage,
    SignaturepadPage
  ],
   providers: [OcrService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
