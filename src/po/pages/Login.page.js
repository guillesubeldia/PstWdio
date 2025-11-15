class LoginPage {
    open() {
        return browser.url('/auth/login');
    }
    get usernameInput() {
        return $('#email');
    }
    get passwordInput() {
        return $('#password');
    }
    get loginButton() {
        return $('#btnSubmit');
    }
    get form() {
        return $('form');
    }

    async isLoaded() {
        const url = await browser.getUrl();
        if (!url.includes('login')) {
            throw new Error(`expected url to include "login" but got "${url}"`);
        }
        await this.form.waitForDisplayed({ timeout: 5000 });
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

}

module.exports = new LoginPage();