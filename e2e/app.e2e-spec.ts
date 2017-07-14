import { TravelTrivandrumPage } from './app.po';

describe('travel-trivandrum App', () => {
  let page: TravelTrivandrumPage;

  beforeEach(() => {
    page = new TravelTrivandrumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
