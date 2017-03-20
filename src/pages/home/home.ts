import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';

import { NavController, ModalController } from 'ionic-angular';

import { ReceivePaymentPage } from '../receive-payment/receive-payment';
import { OfferPaymentModalPage } from '../offer-payment-modal/offer-payment-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  displayQR() {
    this.navCtrl.push(ReceivePaymentPage);
  }

  pay() {
    const localthis = this;
    BarcodeScanner.scan(
      {
        preferFrontCamera: false, // iOS and Android
        showFlipCameraButton: true, // iOS and Android
        showTorchButton: true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        prompt: "", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
      }
    ).then((barcodeData) => {
      // Success! Barcode data is here
      if (!barcodeData.cancelled) {
        // successful receipt of the QR code
        let modal = localthis.modalCtrl.create(OfferPaymentModalPage);
        modal.present();
      }

    }, (err) => {
      // An error occurred
    });
  }

}
