import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-active-user',
  templateUrl: './not-active-user.component.html',
  styleUrls: ['./not-active-user.component.css']
})
export class NotActiveUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToLogin() {
    this.router.navigate(['/login'])
  }

}
