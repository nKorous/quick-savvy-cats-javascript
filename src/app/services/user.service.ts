import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { User } from '../interfaces/user'

const BASE_URL = 'http://localhost:8888'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userIsLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private router: Router,
    private http: HttpClient) { }

  logUserIn(email: string, password: string) {
    this.http.get<any>(BASE_URL + `/api/user/${email}`).subscribe(user => {
      if(user){
        console.log('Logged in', user)
        this.userIsLoggedIn.next(true)
        this.router.navigate(['/home'])
      } else {

      }
    })
  }

  logUserOut() {
    this.userIsLoggedIn.next(false)
    this.loggedInUser.next(null)
    this.router.navigate(['/'])
  }

  


}
