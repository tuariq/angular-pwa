import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  @Output() menuIconClickEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("Navbar initialized");
  }

  menuIconClick() {
    console.log("menu icon clicked");
    this.menuIconClickEvent.next();
  }

}
