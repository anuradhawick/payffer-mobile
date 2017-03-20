import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the OfferPaymentModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-offer-payment-modal',
  templateUrl: 'offer-payment-modal.html'
})
export class OfferPaymentModalPage {

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPaymentModalPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  pay() {
    alert("Payment Successful");
    this.viewCtrl.dismiss();
  }

}
