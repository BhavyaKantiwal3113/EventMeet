import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SelectCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-categories',
  templateUrl: 'select-categories.html',
})
export class SelectCategoriesPage {

        categories=[
      {name:"business",url:"assets/imgs/1.jpg",select:false},
      {name:"sports",url:"assets/imgs/2.jpg",select:false},
      {name:"exhibition",url:"assets/imgs/3.jpg",select:false},
      {name:"concert",url:"assets/imgs/4.jpg",select:false},
      {name:"party",url:"assets/imgs/5.jpg",select:false}];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToHomePage(){
    this.navCtrl.push(TabsPage);
  }
   check(category,i){
    category.select=!category.select;
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCategoriesPage');
  }

}
