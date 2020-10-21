import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PopupService } from '../services/popup.service'
import { map } from 'rxjs/operators';

import { User } from '../interfaces/user'

const BASE_URL = 'http://localhost:8888'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userIsLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private router: Router,
    private http: HttpClient,
    private popup: PopupService) { }

  logUserIn(email: string, password: string) {
    let e = encodeURI(email)
    let p = encodeURI(password)
    this.http.get<User>(BASE_URL + `/api/user/login/${e}/${p}`).subscribe(user => {
      if(user && user.isActive){
        this.popup.success(`Logged In ${email}`)
        this.userIsLoggedIn.next(true)
        this.loggedInUser.next(user)
        this.router.navigate(['/home'])
      } else if (user && !user.isActive) {
        this.popup.error(`${email} is not active, please contact your account manager`, 10000)
      }
      else {
        this.popup.error('Error with username or password')
      }
    })
  }

  updateUserInfo(userInfo: User) {
    this.http.post<any>(BASE_URL + `/api/user/update/${userInfo.guid}`, userInfo)
    .subscribe(user => console.log('updateUserInfo', user))
    // because of the way the json database is working there isn't a response sent
    // i would usually update the user info from the response but i'm doing it here

    this.loggedInUser.next(userInfo)
  }

  logUserOut() {
    this.userIsLoggedIn.next(false)
    this.loggedInUser.next(null)
    this.router.navigate(['/'])
  }
}
