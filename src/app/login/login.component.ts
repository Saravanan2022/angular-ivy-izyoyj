import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  welcomeApplication() {
    alert("Welcome to Login Page")
  }
  
  resetApplication() {
    alert("Are you sure to quit the application")
  }



}