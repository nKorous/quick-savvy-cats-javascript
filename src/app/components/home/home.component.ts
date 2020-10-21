import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser: User

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getLoggedInUser()
  }

  getLoggedInUser() {
    this.userService.loggedInUser.subscribe(user => 
      {
        this.loggedInUser = user
        console.log('home, logged in user', this.loggedInUser)
      })
  }

}
