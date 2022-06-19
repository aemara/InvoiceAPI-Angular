import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName!: string;
  password!: string;
  token!: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login({"userName": this.userName, "password": this.password}).subscribe(res => console.log(jwt_decode(res)));
  }

}
