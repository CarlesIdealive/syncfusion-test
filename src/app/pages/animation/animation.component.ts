import { Component, ViewChild } from '@angular/core';
import { Animation } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css'
})
export class AnimationComponent {
  @ViewChild('element1', { static: false }) element1: any;
  @ViewChild('element2', { static: false }) element2: any;


  ngAfterViewInit() {
    let animation: Animation = new Animation({
        delay: 1000,
        duration: 4000,
        timingFunction: 'ease'
      });
    animation.animate(this.element1.nativeElement, { name: 'FadeOut' });
    animation.animate(this.element2.nativeElement, { name: 'ZoomOut' });
  }

}
