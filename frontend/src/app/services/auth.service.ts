import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Token: TokenService) { }

  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());

  authStatus = this.loggedIn.asObservable();

 changeAuthStatus( authStatus) {
   this.loggedIn.next( authStatus);
 }

}
