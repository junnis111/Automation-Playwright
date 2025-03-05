class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = "h4.card-title a";
        this.addToCartButton = "//a[normalize-space()='Add to cart']";
        this.cartLink = "//a[@id='cartur']";
    }

    async addProductToCart(productName) {
        await this.page.waitForSelector(this.productList, { state: "visible" });
        
        const products = await this.page.locator(this.productList).all(); 
        
        for (const product of products) {
            const name = (await product.textContent());
            
            if (name === productName) {
                console.log(`Clicking on product: ${productName}`);
                await Promise.all([
                    this.page.waitForNavigation({ waitUntil: "domcontentloaded" }), 
                    product.click(),
                ]);
                break;
            }
        }

       
        await this.page.waitForSelector(this.addToCartButton, { state: "visible" });
        await this.page.locator(this.addToCartButton).click();

        await this.page.waitForTimeout(3000); 
    }
}

module.exports = HomePage;
