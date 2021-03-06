import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {HomePage} from '../pages/home/home';
import {SignupPage} from "../pages/signup/signup";
import {AuthService} from "../services/auth";
import { SigninPage } from '../pages/signin/signin';
import {ConnectPage} from "../pages/connect/connect";
import {TabsPage} from "../pages/tabs";
import {NgxQRCodeModule} from "ngx-qrcode2";
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { QRCodeModule } from 'angular2-qrcode';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    ConnectPage,
    TabsPage
  ],
  imports: [
    BrowserModule, QRCodeModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule, HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    ConnectPage,
    TabsPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
