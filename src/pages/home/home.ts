import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  tabBarElement: any;
  ionFab :any;
  constructor(public navCtrl: NavController) {
	  this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
	  this.ionFab = document.querySelector('.fabbutton');
  }
  
  openloggin(){
	this.navCtrl.push(LoginPage);     
  }
  opensignup(){
	this.navCtrl.push(RegisterPage);       
  }
  ionViewWillEnter() {
		if (this.tabBarElement != null){
			this.tabBarElement.style.display = 'none';
			this.ionFab.style.display = 'none';
			
		}
	}
	ionViewWillLeave() {
		if (this.tabBarElement != null){
			this.tabBarElement.style.display = 'flex';
			this.ionFab.style.display = 'flex';
		}
    }
}