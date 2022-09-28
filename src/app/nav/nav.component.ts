import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuVariable: boolean = false;
  nav_open_variable: boolean = false;

  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.nav_open_variable =! this.nav_open_variable;
  }
}
