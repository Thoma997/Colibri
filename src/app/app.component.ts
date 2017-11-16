import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { SigninPage } from '../pages/signin/signin';
import {TabsPage} from "../pages/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;
  tabsPage = TabsPage;
  signinPage = SigninPage;
  isAuthenticated:boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyDHso8rMqBHRwg5AwhfUl9qhW5lb_kaOH4",
      authDomain: "colibri-30b60.firebaseapp.com"
    });

    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.isAuthenticated = true;
        this.rootPage = this.tabsPage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = this.signinPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

