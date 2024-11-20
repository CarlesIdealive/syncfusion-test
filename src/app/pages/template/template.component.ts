import { Component, OnInit } from '@angular/core';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    GridModule,
    PagerModule,

  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {

  public data!: object[];


  ngOnInit(): void {
    this.data = [
      { OrderID: 10248, CustomerID: 'VINET', ShipCountry: 'France' },
      { OrderID: 10249, CustomerID: 'TOMSP', ShipCountry: 'Germany' },
      { OrderID: 10250, CustomerID: 'HANAR', ShipCountry: 'Brazil' }
    ];
  }

}
