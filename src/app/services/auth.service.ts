import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  IsAuthenticated  = signal<Boolean>(false);

  login(username:string , password:string)
  {
    if (username=='avi' && password =='shukrun')
    {
      this.IsAuthenticated.set(true);
    }
    else 
    {
      this.IsAuthenticated.set(false);
    }

    
  }
}
