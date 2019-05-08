import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private alertCtr: AlertController
  ) {}

  ngOnInit() {}
  onSignin(data: NgForm) {
    this.authService.login(data.value.email, data.value.password).subscribe(
      result => {
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
        this.showAlert(err.error.message);
      }
    );
  }
  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  private showAlert(message) {
    this.alertCtr
      .create({ message: message, buttons: ['Ok'] })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
