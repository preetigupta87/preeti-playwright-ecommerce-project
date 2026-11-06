
class CartPage {
  constructor(page) {
    this.page = page;
    this.backpack = page.getByText(
      'Sauce Labs Backpack',
      { exact: true }
    );
    this.checkoutButton = page.getByTestId('checkout');
  }

  async verifyBackpackVisible() {
    await this.backpack.waitFor({
      state: 'visible'
    });
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
