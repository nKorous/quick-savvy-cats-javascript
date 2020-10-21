import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
  }

  login(userName: string, password: string) {
    this.userService.logUserIn(userName, password)
  }

}
