import { NgLiquidOmegaPage } from './app.po';

describe('ng-liquid-omega App', function() {
  let page: NgLiquidOmegaPage;

  beforeEach(() => {
    page = new NgLiquidOmegaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-liquid-omega works!');
  });
});
