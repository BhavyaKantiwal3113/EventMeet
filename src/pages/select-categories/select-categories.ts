import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';


export interface cat {
  Name:string;
  Pic: string;
}
@IonicPage()
@Component({
  selector: 'page-select-categories',
  templateUrl: 'select-categories.html',
})
export class SelectCategoriesPage {
  categoryCollection: AngularFirestoreCollection<cat>;
categories:Observable<cat[]>;
cat=[] ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http) {
    this.categoryCollection = db.collection<cat>("Categories");
    this.categories=this.categoryCollection.valueChanges();
    this.usercategory();
  }
usercategory()
{
  

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
 