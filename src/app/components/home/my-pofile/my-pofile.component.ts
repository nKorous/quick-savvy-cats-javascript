import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-pofile',
  templateUrl: './my-pofile.component.html',
  styleUrls: ['./my-pofile.component.css'],
})
export class MyPofileComponent implements OnInit {
  loggedInUser: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.userService.loggedInUser.subscribe((user) => {
      this.loggedInUser = user;
      console.log('home, logged in user', this.loggedInUser);
    });
  }
}
