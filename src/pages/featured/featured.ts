import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { ProductsPage } from '../products/products';

@IonicPage()
@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html',
})
export class FeaturedPage {
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openservice() {
    this.navCtrl.push(ServicesPage);  
  }
  openproduct() {
    this.navCtrl.push(ProductsPage);  
  }
}