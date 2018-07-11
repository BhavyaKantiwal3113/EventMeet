import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import {SelectCategoriesPage} from '../select-categories/select-categories';
import { ActionSheetController } from 'ionic-angular';
import { GooglePlus} from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
// import {Observable} from 'rxjs/Observable';
// import { ProfilePage } from '../profile/profile';

export interface UserData { Name: string,
                        Email: string,
                        Pic: string }
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  userRef: AngularFirestoreCollection<UserData>;
  userEmail;
  constructor(public navCtrl: NavController,private viewCtrl: ViewController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public afAuth:AngularFireAuth, 
    public googleplus: GooglePlus, public http: HttpClient, db: AngularFirestore, public httpm: Http) 
    {
        this.userRef = db.collection<UserData>("UserProfile")
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  
  presentActionSheet(k) {
    let actionSheet = this.actionSheetCtrl.create({
      
       buttons: [
         {
           icon: 'logo-googleplus',
           text: 'Login with Google',
           handler: () => {
             if(k==1)
                  this.login();
             if(k==2)
                  this.signup();
                }
         }
       ]
    });
 
    actionSheet.present();
  }
  // logout() {
  //   this.afAuth.auth.signOut();
  // }
  login()
  {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
            if(this.afAuth.user)
            {
             let u = this.afAuth.auth.currentUser;
             if (u != null) {
                 u.providerData.forEach( (profile)=> {
                 console.log("Sign-in provider: " + profile.providerId);
                 console.log("  Provider-specific UID: " + profile.uid);
                 console.log("  Name: " + profile.displayName);
                 console.log("  Email: " + profile.email);
                 console.log("  Photo URL: " + profile.photoURL);
                this.userEmail = profile.email;
      });
    }
  }       
          this.getLoginUserDetails(this.userEmail);
           
  }
  getLoginUserDetails(userEmail)
  {
    this.userRef.ref.where("Email","==", userEmail)
    .get().then((querySnapshot) => {
            if(querySnapshot.empty)
              console.log("Login Failed");
            else
               this.navCtrl.setRoot(TabsPage, {
                 data: userEmail
               }); 
    });
  }
  signup() {
    let newemailid;
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
            if(this.afAuth.user)
            {
             let u = this.afAuth.auth.currentUser;
             if (u != null) {
                 u.providerData.forEach( (profile)=> {
                 console.log("Sign-in provider: " + profile.providerId);
                 console.log("  Provider-specific UID: " + profile.uid);
                 console.log("  Name: " + profile.displayName);
                 console.log("  Email: " + profile.email);
                 console.log("  Photo URL: " + profile.photoURL);
                 let userdata = {
                   Email: profile.email,
                   Name: profile.displayName,
                   Pic: profile.photoURL
                 }
                 
                 this.userRef.add(userdata);
                 newemailid = userdata.Email;
      });
    }
    else
    {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      if(this.afAuth.user)
            {
             let u = this.afAuth.auth.currentUser;
             if (u != null) {
                 u.providerData.forEach( (profile)=> {
                 console.log("Sign-in provider: " + profile.providerId);
                 console.log("  Provider-specific UID: " + profile.uid);
                 console.log("  Name: " + profile.displayName);
                 console.log("  Email: " + profile.email);
                 console.log("  Photo URL: " + profile.photoURL);
                 let userdata = {
                   Email: profile.email,
                   Name: profile.displayName,
                   Pic: profile.photoURL
                 }
                 
                 this.userRef.add(userdata);
                 newemailid = userdata.Email;
      });
    }
    }
    }
  }       
           this.navCtrl.setRoot(SelectCategoriesPage, {
             data: newemailid
           });
            }
    
  openSelectCategoriesPage()
  {
      this.navCtrl.push(SelectCategoriesPage)
   }
}

    // this.navCtrl.push(SelectCategoriesPage).then(() => {
    //   // first we find the index of the current view controller:
    //   const index = this.viewCtrl.index;
    //   // then we remove it from the navigation stack
    //   this.navCtrl.remove(index);
