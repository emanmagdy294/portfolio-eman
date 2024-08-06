import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplaySpeed: 1000,
    navSpeed: 600,
    margin:8,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  progects: any[] = [
    { src: '../../../../assets/images/projects images/22.png' },
    { src: '../../../../assets/images/projects images/12.png' },
    { src: '../../../../assets/images/projects images/17.png' },
    { src: '../../../../assets/images/projects images/11.png' },
    { src: '../../../../assets/images/projects images/3.png' },
    { src: '../../../../assets/images/projects images/8.png' },
    { src: '../../../../assets/images/projects images/1.png' },
    { src: '../../../../assets/images/projects images/2.png' },
    { src: '../../../../assets/images/projects images/4.png' },
    { src: '../../../../assets/images/projects images/5.png' },
    { src: '../../../../assets/images/projects images/6.png' },
    { src: '../../../../assets/images/projects images/7.png' },
    { src: '../../../../assets/images/projects images/14.png' },
    { src: '../../../../assets/images/projects images/23.png' },
    { src: '../../../../assets/images/projects images/9.png' },
    { src: '../../../../assets/images/projects images/10.png' },
    { src: '../../../../assets/images/projects images/13.png' },
    { src: '../../../../assets/images/projects images/15.png' },
    { src: '../../../../assets/images/projects images/18.png' },
    { src: '../../../../assets/images/projects images/19.png' },
    { src: '../../../../assets/images/projects images/20.png' },
    { src: '../../../../assets/images/projects images/21.png' }
  ];
}
