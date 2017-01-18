import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlideDetailsPage } from '../slide-details/slide-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goSubPage() {
    this.navCtrl.push(SlideDetailsPage);
  }
}
