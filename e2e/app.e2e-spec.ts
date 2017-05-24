import { SuggeatFrontPage } from './app.po';

describe('suggeat-front App', () => {
  let page: SuggeatFrontPage;

  beforeEach(() => {
    page = new SuggeatFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
