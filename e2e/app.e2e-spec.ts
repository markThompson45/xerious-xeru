import { XeriousXeruPage } from './app.po';

describe('xerious-xeru App', function() {
  let page: XeriousXeruPage;

  beforeEach(() => {
    page = new XeriousXeruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
