import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';


/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public platform: Platform,
				public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }


openMenu1() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Sort',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Price:Low to High',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'cash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Price:High to Low',
          icon: !this.platform.is('ios') ? 'cash' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Avg. Customer Review',
          icon: !this.platform.is('ios') ? 'star' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Newest Arrivals',
          icon: !this.platform.is('ios') ? 'arrow-dropup-circle' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  
  openMenu2() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Filter',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Facial Kits',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'woman' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Lipsticks',
          icon: !this.platform.is('ios') ? 'happy' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Make-up & Brush Kits',
          icon: !this.platform.is('ios') ? 'color-palette' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Nail polish',
          icon: !this.platform.is('ios') ? 'hand' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  
}