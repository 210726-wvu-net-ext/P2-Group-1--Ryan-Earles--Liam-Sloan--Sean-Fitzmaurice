import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'
import { User } from '../login/user';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {

  constructor() { }

  userInfo?: User;
  username: string = localStorage.getItem("user")

  ngOnInit(): void {
  }

}
