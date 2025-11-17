const HomePage = require('../po/pages/Home.page.js')

describe('Practice Software Testing - Home Page', () => {

    it('Debe cargar la página correctamente', async () => {
        await HomePage.open();
        await browser.pause(2000)
    });


});
