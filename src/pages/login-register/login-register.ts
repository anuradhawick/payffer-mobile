import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

/*
  Generated class for the LoginRegister page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html'
})
export class LoginRegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  login() {
    this.navCtrl.setRoot(TabsPage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
