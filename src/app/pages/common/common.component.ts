import { Component } from '@angular/core';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'


@Component({
  selector: 'app-common',
  standalone: true,
  imports: [
    CalendarModule,

  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})
export class CommonComponent {
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public dateValue: Date = new Date(this.fullYear, this.month, 11);
  public minDate: Date = new Date(this.fullYear, this.month, 9);
  public maxDate: Date = new Date(this.fullYear, this.month, 15);


}
