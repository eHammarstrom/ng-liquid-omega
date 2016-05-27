import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-ng-liquid-omega-nested',
  templateUrl: 'ng-liquid-omega-nested.component.html',
  styleUrls: ['ng-liquid-omega-nested.component.css']
})

export class NgLiquidOmegaNestedComponent implements OnInit {

  @Input() clickCounter: number;
  @Output() clickCounterChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  clickMe() {
    this.clickCounter++;
    this.clickCounterChange.emit(this.clickCounter);
  }

}
