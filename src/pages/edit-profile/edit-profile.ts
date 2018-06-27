import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Loading  } from 'ionic-angular';
import { Camera,CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',

  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
user_firstName;
user_lastName;
user_password;
user_email;
user_Confirmpassword;
imageURL;


  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, public navParams: NavParams, private camera: Camera, public loadingCtrl: LoadingController) {
    this.user_firstName = 'Bhavya';
    this.user_lastName='Kantiwal';
    this.user_email='bhavyakantiwal18@gmail.com';
    this.user_password='dynamo';
    this.user_Confirmpassword='dynamo';
  }
  changesSavedAlert() {
    const alert = this.alertCtrl.create({
      title: 'All Changes Saved!',
      buttons: ['OK']
    });
    alert.present();
  }
  confirmYourPasswordAlert() {
    const alert = this.alertCtrl.create({
      title: 'First Confirm Your Password!',
      buttons: ['OK']
    });
    alert.present();
  }
  saveChanges(){
    if(this.user_password==this.user_Confirmpassword)
    {
      this.changesSavedAlert();
    }
    else{
      this.confirmYourPasswordAlert();
    }
  }
  selectImage() {
    this.actionSheetCtrl.create({
      title: 'Set Profile Picture',
      buttons: [
        {
          text: 'Take a Photo',
          handler: () => {
            this.selectImageInCamera();
          }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            this.selectImageInGallery();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).present();
  }
 
popover:CameraPopoverOptions={
  x:20,
  y:60,
  width:200,
  height:100,
  arrowDir:1
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }


  selectImageInGallery() {
    const CAMERA_OPTIONS: CameraOptions = {
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(CAMERA_OPTIONS).then((imageData) => {
      this.imageURL = `data:image/jpeg;base64,${imageData}`;
    }).catch(err => console.error(err));
  }

 
  selectImageInCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  this.camera.getPicture(options).then((imageData) => {
   this.imageURL = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
  //  this.camera.getPicture();
  }

}
