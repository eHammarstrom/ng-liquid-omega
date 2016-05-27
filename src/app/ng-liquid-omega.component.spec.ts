import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgLiquidOmegaAppComponent } from '../app/ng-liquid-omega.component';

beforeEachProviders(() => [NgLiquidOmegaAppComponent]);

describe('App: NgLiquidOmega', () => {
  it('should create the app',
      inject([NgLiquidOmegaAppComponent], (app: NgLiquidOmegaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-liquid-omega works!\'',
      inject([NgLiquidOmegaAppComponent], (app: NgLiquidOmegaAppComponent) => {
    expect(app.title).toEqual('ng-liquid-omega works!');
  }));
});
