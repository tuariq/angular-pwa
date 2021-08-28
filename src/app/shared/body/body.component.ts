import { Component, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() data!: number;
  @ViewChild(MatDrawer) matDrawer!: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange = changes['data'];
    if(!change.isFirstChange()) {
      this.matDrawer.toggle();
    }
  }

}
