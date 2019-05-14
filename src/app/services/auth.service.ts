import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';

interface ResData {
  userId: string;
  name: string;
  email: string;
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  signUp(name, email, password) {
    return this.http.post(
      'https://hidden-refuge-81494.herokuapp.com/auth/signup',
      {
        name,
        email,
        password
      }
    );
  }

  login(email, password) {
    return this.http.post<ResData>(
      'https://hidden-refuge-81494.herokuapp.com/auth/login',
      {
        email,
        password
      }
    );
  }
}
