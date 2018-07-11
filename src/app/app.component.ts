import { Component } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    public layout: LayoutService) {

  }
}
