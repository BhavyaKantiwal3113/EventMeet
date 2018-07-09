import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { CitySubscriptionPage } from '../city-subscription/city-subscription';


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
newemailid;       //gets newemailid value from intro.ts via navParams
usercategory = [
  { Name: "Business", Selected: false },
  { Name: "Entertainment", Selected: false },
  { Name: "Exhibition", Selected: false },
  { Name: "Festivals", Selected: false },
  { Name: "Food n Drinks", Selected: false },
  { Name: "Health n Wellnes", Selected: false },
  { Name: "Music", Selected: false },
  { Name: "Party", Selected: false },
  { Name: "Sports", Selected: false },
  { Name: "Theatre", Selected: false }
];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http) {
    this.newemailid = navParams.get('data');      //newemailid value from intro.ts fetched
   // console.log("select " +this.newemailid);
    this.categoryCollection = db.collection<cat>("Categories");
    this.categories = this.categoryCollection.valueChanges();
  }
  goToCitySubscriptionPage(){
    let ucategory = this.usercategory;
    let newemail = this.newemailid
    this.navCtrl.push(CitySubscriptionPage, {
          data1: newemail,
          data2: ucategory
    });
  }
   check(i){
    this.usercategory[i].Selected=!this.usercategory[i].Selected;
    console.log(this.usercategory[i]);
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCategoriesPage');
  }
}
 