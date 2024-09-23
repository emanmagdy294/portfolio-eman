import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PROJECTS } from './constants/projects';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  progects: any[] = PROJECTS;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplaySpeed: 1000,
    navSpeed: 600,
    margin: 8,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1.5
      },
      740: {
        items: 2.5
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
