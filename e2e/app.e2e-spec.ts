import { PixabuyImageSearchPage } from './app.po';

describe('pixabuy-image-search App', () => {
  let page: PixabuyImageSearchPage;

  beforeEach(() => {
    page = new PixabuyImageSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
