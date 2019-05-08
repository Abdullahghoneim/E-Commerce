import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './user.model';

interface ResData {
  userId: string;
  name: string;
  email: string;
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  private _user = new BehaviorSubject<User>(null);

  autoLogin() {
    return from(Plugins.Storage.get({ key: 'authData' })).pipe(
      map(storedData => {
        if (!storedData || storedData.value) {
          return null;
        }
        const parsedData = JSON.parse(storedData.value) as {
          userId: string;
          email: string;
          token: string;
        };
        const user = new User(
          parsedData.userId,
          parsedData.email,
          parsedData.token
        );
        return user;
      }),
      tap(user => {
        if (user) {
          this._user.next(user);
        }
      }),
      map(user => {
        return !!user;
      })
    );
  }

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }
  get userId() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.userId;
        } else {
          return null;
        }
      })
    );
  }
  signUp(name, email, password) {
    return this.http
      .post('http://localhost:3000/auth/signup', {
        name,
        email,
        password
      })
      .pipe(tap(this.setUserData.bind(this)));
  }
  login(email, password) {
    return this.http
      .post<ResData>('http://localhost:3000/auth/login', {
        email,
        password
      })
      .pipe(tap(this.setUserData.bind(this)));
  }

  logout() {
    return this._user.next(null);
  }

  private setUserData(userData: ResData) {
    this._user.next(new User(userData.userId, userData.email, userData.token));
    this.storeData(userData.userId, userData.email, userData.token);
  }

  private storeData(userId: string, email: string, token: string) {
    const data = JSON.stringify({ userId: userId, email: email, token: token });
    Plugins.Storage.set({ key: 'authData', value: data });
  }
}
