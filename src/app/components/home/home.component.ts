import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { BalanceDialogComponent } from './balance-dialog/balance-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedInUser: User;

  constructor(
    private userService: UserService,
    public balanceDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.userService.loggedInUser.subscribe((user) => {
      this.loggedInUser = user;
      this.loggedInUser.transactions.sort((a, b) => {
        return a.transactionDate > b.transactionDate
          ? -1
          : b.transactionDate > a.transactionDate
          ? 1
          : 0;
      });
    });
  }

  openBalance() {
    this.balanceDialog.open(BalanceDialogComponent, {
      width: '50%',
      height: '25%',
      data: { balance: this.loggedInUser.balance },
    });
  }

  navProfile() {
    this.router.navigate([`/profile`, { from: 'home' }]);
  }
}
