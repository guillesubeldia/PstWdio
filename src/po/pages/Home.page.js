class HomePage {
    get searchInput() { 
        return $('#search-query'); 
    }

    get searchButton() { 
        return $('#search-btn'); 
    }

    get featuredProducts() {
        return $$('.card');
    }

    open() {
        return browser.url('/');
    }

    async searchProduct(text) {
        await this.searchInput.setValue(text);
        await this.searchButton.click();
    }
}

module.exports = new HomePage();
