import { Component, OnInit } from '@angular/core';

import { NgLiquidOmegaNestedComponent } from './ng-liquid-omega-nested';

@Component({
  moduleId: module.id,
  selector: 'ng-liquid-omega-app',
  templateUrl: 'ng-liquid-omega.component.html',
  styleUrls: ['ng-liquid-omega.component.css'],
  directives: [NgLiquidOmegaNestedComponent]
})

export class NgLiquidOmegaAppComponent implements OnInit {
  title = 'ng-liquid-omega works!';

  clickCounter: number;

  constructor() {

  }

  ngOnInit() {
    this.clickCounter = 0;
  }

  clickMe() {
    this.clickCounter++;
  }
}
