import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isAuthenticated = this.authService.IsAuthenticated;
  title = 'ניהול מפלגה';
  
  constructor(private authService : AuthService){}

  public logout(): void {
    // todo
  }
}
