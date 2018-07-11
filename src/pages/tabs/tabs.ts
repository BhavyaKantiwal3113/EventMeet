import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';

import { HomePage } from '../home/home';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = NotificationsPage;

  constructor() {}
}
