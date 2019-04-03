import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {SnotifyService} from 'ng-snotify';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signup = false;
  public email_taken = false;
  public error = {
    email: null,
   password: null,
   password_confirmation: null,
   terms: null,
 };
  public form = {
     email: null,
    password: null,
    password_confirmation: null,
    terms: null,
  };
  public loggedIn;
 // public error = [];
  constructor(
    private backService: SignupService,
    private token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private notify: SnotifyService,
    ) { }
  onSubmit() {
    return this.backService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleResponse(data) {
    this.notify.success('Signup Successfully Created...', {timeout: 4000});
    // this.token.handle(data.access_token);
   // this.Auth.changeAuthStatus(true);
   this.signup = true;
    this.router.navigateByUrl('/signup');
  }
  handleError (error) {
    this.email_taken = true;
    this.notify.warning( error.error.error, {
      timeout: 5000,
     // showProgressBar: false,
      // closeOnClick: false,
     // pauseOnHover: true
    });
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
