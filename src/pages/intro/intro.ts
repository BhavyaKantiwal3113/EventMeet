import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import {SelectCategoriesPage} from '../select-categories/select-categories';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
vid
  constructor(public navCtrl: NavController,private viewCtrl: ViewController, public navParams: NavParams) {
  }
  ionViewWillLeave(){
    this.vid=document.getElementsByClassName("myvideo");
    for(var i=0;i<this.vid.length;i++){
      this.vid[i].pause();
    
  }}
  openLoginPage()
  {
    this.navCtrl.push(SelectCategoriesPage);
    
    // this.navCtrl.push(SelectCategoriesPage).then(() => {
    //   // first we find the index of the current view controller:
    //   const index = this.viewCtrl.index;
    //   // then we remove it from the navigation stack
    //   this.navCtrl.remove(index);
    // });
  }
  openSignUpPage(){
    this.navCtrl.push(SelectCategoriesPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
