import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgLiquidOmegaNestedComponent } from './ng-liquid-omega-nested.component';

describe('Component: NgLiquidOmegaNested', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [NgLiquidOmegaNestedComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([NgLiquidOmegaNestedComponent],
      (component: NgLiquidOmegaNestedComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NgLiquidOmegaNestedComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(NgLiquidOmegaNestedComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-ng-liquid-omega-nested></app-ng-liquid-omega-nested>
  `,
  directives: [NgLiquidOmegaNestedComponent]
})
class NgLiquidOmegaNestedComponentTestController {
}

