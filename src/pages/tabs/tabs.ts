import { Component } from '@angular/core';
import { FeaturedPage } from '../featured/featured';
import { ServicesPage } from '../services/services';
import { ProductsPage } from '../products/products';
import { MorePage } from '../more/more';
import { BookingPage } from '../booking/booking';
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	tab1Root = FeaturedPage;
	tab2Root = ServicesPage;
	tab3Root = ProductsPage;
	tab4Root = MorePage;
			
  constructor(public navCtrl: NavController){}
  booking() {
    this.navCtrl.push(BookingPage);     
  }
}