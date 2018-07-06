import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
//import { firebase } from '../../app/app.module';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase/app';
@Injectable()
export class UserProvider {
  categoriesRef;
  categoriesname:any;
  categoriespic = [];
  categories =[];
  constructor(public http: HttpClient, db: AngularFirestore, public httpm: Http) {
    //console.log('Hello UserProvider Provider');
    this.categoriesRef = db.collection("Categories");
  }
  displayCategories()
  {
    let cat = {
      Name: '',
      Pic: '',
      selected: false
    };
    let i = 0;
     this.categoriesRef.ref.get().then((querySnapshot) => {
       querySnapshot.forEach(doc => {
         console.log(doc.data().Name);
         
          this.categoriesname.push({name:doc.data().Name});
         // this.categoriespic[i++] =doc.data().Pic;
       });
     })
     .catch(function(error){
       console.log("Error getting documents: ",error);
     });
     console.log(this.categoriesname);
    //  for(let j=0; j < this.categoriesname.length; j++)
    //  {
    //    cat.Name = this.categoriesname[j];
    //    cat.Pic = this.categoriespic[j];
    //   // this.categories[j].Name = cat;
    //   console.log(cat);
    //    this.categories.push(cat);
    //  }
     console.log(this.categories);
  }
  getUserDetails()
  {
    let u = firebase.auth().currentUser;

    if (u != null) {
      u.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }
}
