import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo UI Library';
  public myDatepickerValue: string | Date = new Date(2018, 1, 2);
}
