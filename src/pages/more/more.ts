import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aboutus1Page } from '../aboutus1/aboutus1';
import { OffersPage } from '../offers/offers';
import { ReviewsPage } from '../reviews/reviews';
import { GalleryPage } from '../gallery/gallery';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  about() {
    this.navCtrl.push(Aboutus1Page);  
  }
  offer() {
    this.navCtrl.push(OffersPage);  
  }
  gallery() {
    this.navCtrl.push(GalleryPage);  
  }
  review() {
    this.navCtrl.push(ReviewsPage);  
  }
  logout(){
	this.navCtrl.push(HomePage);    
  }
  
}