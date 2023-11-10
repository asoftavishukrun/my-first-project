import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = signal<Boolean>(false);

  count:number = 0;
  
  show() {
    if(this.count==0)
        this.isLoading.set(true);
    this.count = this.count+ 1;
  }
  hide() {
      this.count = this.count-1;
      if (this.count==0)
        this.isLoading.set(false);
  }

  constructor() { }
}
