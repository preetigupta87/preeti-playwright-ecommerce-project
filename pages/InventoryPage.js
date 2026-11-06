
class InventoryPage {
  constructor(page) {
    this.page = page;
    this.backpack = page.getByTestId(
      'add-to-cart-sauce-labs-backpack'
    );
    this.cartLink = page.getByTestId(
      'shopping-cart-link'
    );
  }

  async addBackpackToCart() {
    await this.backpack.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage }