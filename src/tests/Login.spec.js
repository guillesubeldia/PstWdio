const HomePage = require('../po/pages/Home.page.js')
const LoginPage = require('../po/pages/Login.page.js')

describe('Login Page Tests', () => {
    it('Should load the login page correctly', async () => {
        await LoginPage.open();
        await browser.pause(2000);
        await LoginPage.isLoaded();
        await browser.pause(2000);
    });
})