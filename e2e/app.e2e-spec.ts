import { DatePickerComponentPage } from './app.po';

describe('date-picker-component App', () => {
  let page: DatePickerComponentPage;

  beforeEach(() => {
    page = new DatePickerComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
