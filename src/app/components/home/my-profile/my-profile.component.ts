import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { PopupService } from 'src/app/services/popup.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
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

  constructor(private userService: UserService,
      private popup: PopupService) {}

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.userService.loggedInUser.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  companyEditToggle() {
    this.editCompany = !this.editCompany
  }

  setCompanyName(company: string) {
    this.newCompany = company
  }

  editPictureToggle() {
    this.editPictureURL = !this.editPictureURL
  }

  setPicURL(url: string) {
    this.newPictureURL = url
  }

  editAgeToggle() {
    this.editAge = !this.editAge
  }

  setAge(age: number){
    this.newAge = age
  }

  editEyeColorToggle(){
    this.editEyeColor = !this.editEyeColor
  }

  setEyeColor(color: string) {
    this.newEyeColor = color
  }

  editEmailToggle() {
    this.editEmail = !this.editEmail
  }

  setEmail(email: string) {
    this.newEmail = email
  }

  editPhoneToggle() {
    this.editPhone = !this.editPhone
  }

  setPhone(tel: string) {
    this.newPhone = tel
  }

  editAddressToggle() {
    this.editAddress = !this.editAddress
  }

  setAddressToggle(address: string) {
    this.newAddress = address
  }

  save(){
    this.editPictureURL = false
    this.editAge = false;
    this.editEyeColor = false;
    this.editName = false;
    this.editCompany = false;
    this.editEmail = false;
    this.editPhone = false;
    this.editAddress = false;

    this.loggedInUser = {
      ...this.loggedInUser,
      company: this.newCompany || this.loggedInUser.company,
      email: this.newEmail || this.loggedInUser.email,
      phone: this.newPhone || this.loggedInUser.phone,
      address: this.newAddress || this.loggedInUser.address,      
      age: this.newAge || this.loggedInUser.age,
      eyeColor: this.newEyeColor || this.loggedInUser.eyeColor,
      picture: this.newPictureURL || this.loggedInUser.picture
    }

    this.userService.updateUserInfo(this.loggedInUser)

    this.popup.success(`Saved Profile Settings`)
  }
}

