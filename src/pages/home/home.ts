import { Component, ViewChild } from '@angular/core';
import { App,NavController,NavParams, Slides } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { first } from 'rxjs/operators';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myemail;
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;

  constructor(public navCtrl: NavController,public appCtrl: App, public navParams: NavParams) {
    this.myemail = navParams.get('data');
    this.selectedSegment = 'first';
    this.slides = [
      {
        id: "first",
        title: "First Slide"
      },
      {
        id: "second",
        title: "Second Slide"
      },
      {
        id: "third",
        title: "Third Slide"
      }
    ];
  }
  onSegmentChanged(segmentButton) {
    console.log(segmentButton);
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
    console.log(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  }
  openProfilePage()
{
  this.appCtrl.getRootNav().push(UserProfilePage);
// this.navCtrl.push(UserProfilePage);
}

}
