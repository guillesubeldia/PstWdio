const HomePage = require('../po/pages/Home.page.js')
const LoginPage = require('../po/pages/Login.page.js')
const { loadUser } = require('../utils/userStorage.js');

describe('Login Page Tests', () => {
    let user;

    before(async () => {
        user = loadUser(); // cargamos datos guardados del registro
    });

    it('Should load the login page correctly', async () => {
        await LoginPage.open();
        await browser.pause(2000);
        await LoginPage.isLoaded();
        await browser.pause(2000);
    });

    it('Should login with the saved user', async () => {
        await LoginPage.open();
        
        await LoginPage.email.setValue(user.email);
        await LoginPage.password.setValue(user.password);
        await LoginPage.submitButton.click();

        await expect(LoginPage.welcomeMessage).toBeDisplayed();
    });


})