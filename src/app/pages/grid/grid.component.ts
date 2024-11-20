import { Component, OnInit } from '@angular/core';
import { GridModule, PagerModule,
      PageService, PageSettingsModel,
      SortService,
      FilterService,
      GroupService,
      EditService,
      EditSettings,
      PdfExportService,

       } from '@syncfusion/ej2-angular-grids';
import { data } from '../../data/datasource';


@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    GridModule,
    PagerModule,

  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    EditService,
    PdfExportService,


  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit {
  public pageSettings: PageSettingsModel = { pageSize: 5 };
  public data?: Object[];
  ngOnInit(): void {
    this.data = data;
  }





//     OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
//     ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
//     ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
//   },
//   {
//     OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
//     ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
//     ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
//   },
//   {
//     OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
//     ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
//     ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
//   }
// ];



}
