import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyAccountPage } from '../my-account/my-account';
import { ContactPage } from '../contact/contact';
import { TransactionHistoryPage } from '../transaction-history/transaction-history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyAccountPage;
  tab2Root: any = TransactionHistoryPage;
  tab3Root: any = HomePage;
  tab4Root: any = ContactPage;
  tab5Root: any = ContactPage;

  constructor() {

  }
}
