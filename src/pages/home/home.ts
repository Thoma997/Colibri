import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConnectPage} from "../connect/connect";
import {AuthService} from "../../services/auth";



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  connectPage = ConnectPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  logout(){
    this.authService.logout();
  }
}
