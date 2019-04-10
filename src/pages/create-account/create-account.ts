import { Component } from '@angular/core';
import { NavController, NavParams, LoadingCmp, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserModel } from '../../models/user-model';
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  name:string;
  user:string;
  pwd:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private user_provider: UserProvider,
              private loadingCtrl: LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  createAccountService(){
    let loading = this.loadingCtrl.create({
      content:'Creando Cuenta',
      spinner: 'dots'
    });
    
    loading.present();

    let user = new UserModel();
    user.name = this.name;
    user.user = this.user;
    user.pwd = this.pwd;

    this.user_provider
    .createUser(user)
    .subscribe(() => {
      console.log('Cuenta creada');
      loading.dismiss();
      this.navCtrl.popToRoot();
    }, 
      error => {
        console.log('Error');      
      },
      () => { 
        console.log('Finished');
        
      });
  }

}
