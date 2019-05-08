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
    return this.http.post('http://localhost:3000/auth/signup', {
      name,
      email,
      password
    });
  }

  login(email, password) {
    return this.http.post<ResData>('http://localhost:3000/auth/login', {
      email,
      password
    });
  }

  // private setUserData(userData: ResData) {
  //   this._user.next(new User(userData.userId, userData.email, userData.token));
  //   this.storeData(userData.userId, userData.email, userData.token);
  // }

  // private storeData(userId: string, email: string, token: string) {
  //   const data = JSON.stringify({ userId: userId, email: email, token: token });
  //   Plugins.Storage.set({ key: 'authData', value: data });
  // }
}
