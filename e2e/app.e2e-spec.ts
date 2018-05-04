import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('HumByrd and Knapp Games');
  });
});
