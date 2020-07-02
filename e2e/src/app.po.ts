import { browser, by, element } from 'protractor';

export class AppPage {
  sleep(){
    browser.driver.sleep(5000);
  }
  //j'ajoute une ligne de commentaire 

  completeForm(){
    let model = element.all(by.id('model'));
    let brand = element.all(by.id('brand'));
    let type = element.all(by.id('type'));
    let category = element.all(by.id('category'));
    let buyingPrice = element.all(by.id('buyingPrice'));
    let sellingPrice = element.all(by.id('sellingPrice'));
    let dateEntryStock = element.all(by.id('dateEntryStock'));


  model.sendKeys('test');
  // brand.sendKeys('dell');
  // type.sendKeys('tablette hybride');
  // category.sendKeys('bureautique');
  buyingPrice.sendKeys(598);
  sellingPrice.sendKeys(899);
  dateEntryStock.sendKeys("08-07-2020");
  }

}