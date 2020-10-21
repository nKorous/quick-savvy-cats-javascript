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

  editPictureURL: boolean = false
  editAge: boolean = false;
  editEyeColor: boolean = false;
  editName: boolean = false;
  editCompany: boolean = false;
  editEmail: boolean = false;
  editPhone: boolean = false;
  editAddress: boolean = false;

  newName: {first: string, last: string}

  newPictureURL: string;
  newAge: number;
  newEyeColor: string;
  newCompany: string;
  newEmail: string;
  newPhone: string;
  newAddress: string

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
