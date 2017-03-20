import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyAccountPage } from '../pages/my-account/my-account';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ReceivePaymentPage } from '../pages/receive-payment/receive-payment';
import { OfferPaymentModalPage } from '../pages/offer-payment-modal/offer-payment-modal';
import { LoginRegisterPage } from '../pages/login-register/login-register';
import { RegisterPage } from '../pages/register/register';
import { TransactionHistoryPage }  from '../pages/transaction-history/transaction-history';

@NgModule({
  declarations: [
    MyApp,
    MyAccountPage,
    ContactPage,
    HomePage,
    TabsPage,
    ReceivePaymentPage,
    OfferPaymentModalPage,
    LoginRegisterPage,
    RegisterPage,
    TransactionHistoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyAccountPage,
    ContactPage,
    HomePage,
    TabsPage,
    ReceivePaymentPage,
    OfferPaymentModalPage,
    LoginRegisterPage,
    RegisterPage,
    TransactionHistoryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
