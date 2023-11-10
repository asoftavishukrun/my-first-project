import { Component, WritableSignal } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = this.authService.IsAuthenticated;
  title = 'Tic Tac Toe';
  
  constructor(private authService : AuthService){}

}
