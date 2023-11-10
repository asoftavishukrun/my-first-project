import { Component, WritableSignal } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService){}
  color = 'primary';
  mode : ProgressSpinnerMode = 'indeterminate';
  value = 100;
  isLoading: WritableSignal<Boolean> = this.loaderService.isLoading;
}
