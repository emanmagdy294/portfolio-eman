import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen: boolean = false;
  hidden = false;

  constructor(private _router: Router) {
    //navbar routing 
    _router.events.subscribe((val) => this.isOpen = false)
  }

  ngOnInit(): void {
  }

  open(event: any) {
    this.isOpen = !this.isOpen
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
