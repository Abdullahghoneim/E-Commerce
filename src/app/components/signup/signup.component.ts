import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(
    private loadingCtr: LoadingController,
    private authService: AuthService,
    private alertCtr: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}
  onSignup(data: NgForm) {
    console.log(data.value);
    this.authService
      .signUp(data.value.name, data.value.email, data.value.password)
      .subscribe(
        result => {
          this.router.navigate(['']);
        },
        err => {
          this.showAlert(err.error.message);
        }
      );
  }

  showAlert(message) {
    this.alertCtr
      .create({ message: message, buttons: ['Ok'] })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
