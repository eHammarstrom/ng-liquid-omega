export class NgLiquidOmegaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-liquid-omega-app h1')).getText();
  }
}
