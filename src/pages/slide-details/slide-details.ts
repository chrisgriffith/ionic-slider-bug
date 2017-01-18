import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-slide-details',
  templateUrl: 'slide-details.html'
})
export class SlideDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideDetailsPage');
  }

  goSlider(){
    this.navCtrl.push(HomePage);
  }

}
