import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {AuthService} from "../../services/auth";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  signupPage = SignupPage;

  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {

  }

  onSignIn(f:NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signin(f.value.loginMail, f.value.loginPassword)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: error.message,
          buttons: ['OK']
        });
        alert.present();
      });
  }

}
