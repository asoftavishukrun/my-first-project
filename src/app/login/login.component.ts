import { Component, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginValid:WritableSignal<Boolean> = this.authService.IsAuthenticated;
  public username = '';
  public password = '';

  private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private authService : AuthService
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
  }

  onSubmit(){
    this.authService.login(this.username, this.password);
     alert (this.loginValid());
  }
}
