import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone:any;
  password:any;
  role:any;
  arr:any[];

  constructor(http: Http,
    private authService: AuthService) { }


  ngOnInit() {
  }

  login() {
    this.phone = "3659246985";
    this.password = "farmer123";
    this.role = "Farmer";

    const login_details = {
      phone: this.phone,
      password: this.password,
      role:this.role
    };
    console.log(login_details);
    this.authService.sendLoginDetails(login_details).subscribe(data => {
     this.arr = data;
     //this.arr = Array.of(this.arr);
      console.log(this.arr);

   });

}
}
