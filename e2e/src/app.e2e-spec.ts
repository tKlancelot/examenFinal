import { browser, logging, element, by } from 'protractor';
import { AppPage } from './app.po';

describe('test sur ma liste d\'ordinateur', () => {
  let page: AppPage;
  let nbElement:number;

  beforeEach(() => {
    page = new AppPage();
    browser.get('home');
  });

  it('En tant qu’utilisateur, en arrivant sur la page de listing des ordinateurs je peux voir un lien qui me permet d’ajouter une autre ordinateur', () => {
    element.all(by.css('.tableline')).then(totalRows =>{
      nbElement = totalRows.length;
      page.sleep();
      element(by.id('addElementLink')).click();
      page.sleep();
      expect(browser.driver.getCurrentUrl()).toContain('/addComputer');
      console.log(nbElement);
    });
  });

  it('En tant qu’utilisateur, quand je remplis le formulaire, et qu’il est valide je peut ajouter une ordinateur en cliquant sur le bouton soumettre ma liste de élément est alors bien mise à jour', ()=>{
    browser.get('/addComputer');
    page.completeForm();
    page.sleep();
    element.all(by.css('.boutonSubmit')).click().then(totalNewRow =>{
      page.sleep();
      expect(browser.driver.getCurrentUrl()).toContain('home');
      console.log(totalNewRow);
    });
  })

  it('j ai une element de plus dans mon tableau',()=>{
    element.all(by.css('.tableline')).then(totalRows=>{
      nbElement = nbElement+1;
      expect(totalRows.length).toEqual(nbElement);
      page.sleep();
      console.log(nbElement);
    });
  })

  it('je peux supprimer un élément  de la liste ', ()=>{
    element.all(by.css('.suppr')).last().click().then(()=>{
    element.all(by.css('.tableline')).then(totalRows=>{
      nbElement = nbElement-1;
      expect(totalRows.length).toEqual(nbElement);
      page.sleep();
      console.log(nbElement);
    })
  });
    

  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});