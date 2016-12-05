import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AndroidFingerprintAuth } from 'ionic-native';

import { ShowSecretsPage} from '../show-secrets/show-secrets';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showSecretsPage = ShowSecretsPage;

  constructor(public navCtrl: NavController) {

  }

  onClickAuth() {
    AndroidFingerprintAuth.isAvailable().then((result)=> {
      if(result.isAvailable){
        // it is available

        AndroidFingerprintAuth.show({ clientId: "myAppName", clientSecret: "so_encrypted_much_secure_very_secret" }).then(result => {
          if(result.withFingerprint) {
            this.navCtrl.push(this.showSecretsPage);
            console.log('Successfully authenticated with fingerprint!');
          } else if(result.withPassword) {
            this.navCtrl.push(this.showSecretsPage);
            console.log('Successfully authenticated with backup password!');
          } else {
            alert("Nothing to authenticate here. Move along.");
            console.log('Didn\'t authenticate!');
          }
        }).catch(error => console.error(error));

      } else {
        // fingerprint auth isn't available
      }
    }).catch(error => console.error(error));
  }

}
