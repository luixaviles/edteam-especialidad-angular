import { Component, OnInit, Input } from '@angular/core';
import { MatSidenavModule, MatSidenav } from '@angular/material';

@Component({
  selector: 'ed-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

}
