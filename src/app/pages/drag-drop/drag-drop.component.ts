import { Component, ViewChild } from '@angular/core';
import { Draggable, DropEventArgs, Droppable } from '@syncfusion/ej2-base';

@Component({
  selector: 'drag-drop',
  standalone: true,
  imports: [

  ],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.css'
})
export class DragDropComponent {
  // @ViewChild('ele', { static: false }) element: any;
  @ViewChild('droppable', { static: false }) element: any;
  @ViewChild('draggable', { static: false }) element1: any;

  ngAfterViewInit() {
    //Ejemplo 1
    // let draggable: Draggable =  new Draggable(this.element.nativeElement, { clone: true });
    //Ejemplo 2
    let draggable: Draggable = new Draggable(document.getElementById('draggable') as HTMLElement, { clone: false, dragArea: "#droppable" });
    //Ejemlo 3
    // let draggable: Draggable = new Draggable(document.getElementById('draggable') as HTMLElement, { clone: false });
    // let droppable: Droppable = new Droppable(document.getElementById('droppable') as HTMLElement, {
    //   drop: (e: DropEventArgs) => {
    //     ((e.droppedElement as HTMLElement).querySelector('.drag') as Element).textContent = 'Dropped';
    //   }
    // });

  }


}
