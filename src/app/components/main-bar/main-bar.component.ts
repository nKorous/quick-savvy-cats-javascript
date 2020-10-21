import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'mainbar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css'],
})
export class MainbarComponent implements OnInit {
  userIsLoggedIn: boolean = false;
  loggedInUser: User;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.userService.userIsLoggedIn.subscribe(
      (status) => (this.userIsLoggedIn = status)
    );

    this.userService.loggedInUser.subscribe((user) => {
      this.loggedInUser = user;

      if(!this.loggedInUser || this.loggedInUser === null) {
        this.router.navigate(['/'])
      }
    });
  }

  ngOnDestroy() {
    this.logOut()
  }

  logOut() {
  }
}
