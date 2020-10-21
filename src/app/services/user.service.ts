import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { User } from '../interfaces/user'
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userIsLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private router: Router) { }

  logUserIn(userName: string, password: string) {
    this.userIsLoggedIn.next(true)
    this.router.navigate(['/home'])
  }

  logUserOut() {
    this.userIsLoggedIn.next(false)
    this.loggedInUser.next(null)
    this.router.navigate(['/'])
  }

  


}
