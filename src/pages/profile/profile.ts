import { Component } from '@angular/core';
import { IonicPage, App, NavController, NavParams } from 'ionic-angular';
import {EditProfilePage} from '../edit-profile/edit-profile';
import { UserProfilePage } from '../user-profile/user-profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';

export interface Profile{
  Email: string,
  Name: string,
  Pic: string
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 abc="one";
 myemail;
 mypic;
 myname;
 myProfile: any = {};
 profileCollection: AngularFirestoreCollection<Profile>;
 profileView: Observable<Profile[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http,public afAuth:AngularFireAuth, public appCtrl: App) {
    this.myemail = navParams.get('data');
    this.profileCollection = db.collection<Profile>("UserProfile");
    this.profileView = this.profileCollection.valueChanges();


  let u = this.afAuth.auth.currentUser;
             if (u != null) {
                 u.providerData.forEach( (profile)=> {
                this.mypic = profile.photoURL;
                this.myname = profile.displayName;
      });
    }
  }
  openEditProfilePage(){
    this.appCtrl.getRootNav().push(EditProfilePage, {
      data: this.myemail
    });
  }
  openUserProfilePage(){
    this.appCtrl.getRootNav().push(UserProfilePage, {
      data1: this.myemail,
      data2: this.mypic,
      data3: this.myname
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
