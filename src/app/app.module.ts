import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FeaturedPage } from '../pages/featured/featured';
import { ServicesPage } from '../pages/services/services';
import { MassagePage } from '../pages/massage/massage';
import { ProductsPage } from '../pages/products/products';
import { MorePage } from '../pages/more/more';
import { GalleryPage } from '../pages/gallery/gallery';
import { Aboutus1Page } from '../pages/aboutus1/aboutus1';
import { Aboutus2Page } from '../pages/aboutus2/aboutus2';
import { OffersPage } from '../pages/offers/offers';
import { ReviewsPage } from '../pages/reviews/reviews';
import { TabsPage } from '../pages/tabs/tabs';
import { BookingPage } from '../pages/booking/booking';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
	RegisterPage,
	FeaturedPage,
	ServicesPage,
	MassagePage,
	ProductsPage,
	MorePage,
	GalleryPage,
	Aboutus1Page,
	Aboutus2Page,
	OffersPage,
	ReviewsPage,
	TabsPage,
	BookingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage,
	RegisterPage,
	FeaturedPage,
	ServicesPage,
	MassagePage,
	ProductsPage,
	MorePage,
	GalleryPage,
	Aboutus1Page,
	Aboutus2Page,
	OffersPage,
	ReviewsPage,
	TabsPage,
	BookingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
