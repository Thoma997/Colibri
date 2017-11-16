

import {Component} from "@angular/core";
import {ConnectPage} from "./connect/connect";
import {HomePage} from "./home/home";

@Component({
  selector: 'page-tabs',
  template:
      `
    <ion-tabs>
      <ion-tab [root]="homePage" tabIcon="home"></ion-tab>
      <ion-tab [root]="homePage" tabIcon="search"></ion-tab>
      <ion-tab [root]="connectPage" tabIcon="add"></ion-tab>
      <ion-tab [root]="homePage" tabIcon="contacts"></ion-tab>
      <ion-tab [root]="homePage" tabIcon="settings"></ion-tab>
    </ion-tabs>

  `
})

export class TabsPage {
  connectPage = ConnectPage;
  homePage = HomePage;
}


