import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {SnotifyService} from 'ng-snotify';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login = false;
  public form = {
    email: null,
    password: null
  };
  public error = null;

  constructor(
    private logService: SignupService,
    private token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private notify: SnotifyService,
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.logService.login(this.form).subscribe(
       // data => console.log(data),
       // error => console.log(error),
       data => this.handleResponse(data),
        error => this.handleError(error),
      );
    // return console.log(this.form);
      }
      handleResponse(data) {
        this.notify.success('Login Successful...', {timeout: 4000});
        this.token.handle(data.access_token);
        this.Auth.changeAuthStatus(true);
        this.router.navigateByUrl('/dashboard');
      }
      handleError(error) {
        this.login = true;
         this.notify.warning( error.error.error, {
          timeout: 5000,
         // showProgressBar: false,
          // closeOnClick: false,
         // pauseOnHover: true
        });
        this.error = error.error.error;
      }

}
