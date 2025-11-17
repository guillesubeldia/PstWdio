const CreateUser = require('../po/pages/CreateUser.page.js');

const { generateUser } = require('../utils/userFactory.js');
const { saveUser } = require('../utils/userStorage.js');

describe('User registration Page', () => {
    //creo una variable user para usar en varios tests
   

    beforeEach(async () => {
        await CreateUser.open();
        await CreateUser.isLoaded();
    });

    it('Should load the login page correctly', async () => {
        // Acá podés hacer asserts más específicos de la carga
        await expect(CreateUser.form).toBeDisplayed();
    });


    it('Should have the register form',async () =>{
        await expect(CreateUser.form).toBeDisplayed();
        await expect(CreateUser.form).toHaveElementProperty('tagName', 'FORM');
    });

    it('Should have the register form fields', async () =>{
        const fields = [
        CreateUser.firstName,
        CreateUser.lastName,
        CreateUser.dateOfBirth,
        CreateUser.streetAddress,
        CreateUser.postalCode,
        CreateUser.city,
        CreateUser.state,
        CreateUser.country,
        CreateUser.phone,
        CreateUser.email,
        CreateUser.password,
        ];

        for (const field of fields) {
            await expect(field).toBeDisplayed();
            await expect(field).toBeEnabled();
        }
        //cambie el codigo de abajo por este bucle para evitar repeticion
        // await expect(CreateUser.firstName).toBeDisplayed();
        // await expect(CreateUser.firstName).toBeEnabled();
        // await expect(CreateUser.lastName).toBeDisplayed();
        // await expect(CreateUser.lastName).toBeEnabled();
        // await expect(CreateUser.dateOfBirth).toBeDisplayed();
        // await expect(CreateUser.dateOfBirth).toBeEnabled();
        // // await expect(CreateUser.dateOfBirth).toHaveAttribute('type','date');
        // await expect(CreateUser.streetAddress).toBeDisplayed();
        // await expect(CreateUser.streetAddress).toBeEnabled();
        // await expect(CreateUser.postalCode).toBeDisplayed();
        // await expect(CreateUser.postalCode).toBeEnabled();
        // await expect(CreateUser.city).toBeDisplayed();
        // await expect(CreateUser.city).toBeEnabled();
        // await expect(CreateUser.state).toBeDisplayed();
        // await expect(CreateUser.state).toBeEnabled();
        // await expect(CreateUser.country).toBeDisplayed();
        // await expect(CreateUser.country).toBeEnabled()
        // await expect(CreateUser.phone).toBeDisplayed();
        // await expect(CreateUser.phone).toBeEnabled();
        // await expect(CreateUser.email).toBeDisplayed();
        // await expect(CreateUser.email).toBeEnabled();
        // await expect(CreateUser.password).toBeDisplayed();
        // await expect(CreateUser.password).toBeEnabled();

        await expect(CreateUser.country).toHaveElementProperty('tagName', 'SELECT');
        await expect(CreateUser.password).toHaveAttribute('type','password');
        
        await expect(CreateUser.submitButton).toBeDisplayed();
        await expect(CreateUser.submitButton).toBeClickable();

    });

    it('Should register a new user successfully', async () => {
        const user = generateUser(); // generamos usuario

        await CreateUser.firstName.setValue(user.firstName);
        await browser.pause(1000);
        await CreateUser.lastName.setValue(user.lastName);
        await browser.pause(1000);
        await CreateUser.dateOfBirth.setValue(user.dob);
        await browser.pause(1000);
        await CreateUser.streetAddress.setValue(user.street);
        await browser.pause(1000);
        await CreateUser.postalCode.setValue(user.postalCode);
        await browser.pause(1000);
        await CreateUser.city.setValue(user.city);
        await browser.pause(1000);
        await CreateUser.state.setValue(user.state);
        await browser.pause(1000);
        //este select es diferente a los otros campos por ser un dropdown menu 
        await CreateUser.country.selectByVisibleText(user.country);
        await browser.pause(1000);
        await CreateUser.phone.setValue(user.phone);
        await browser.pause(1000);
        await CreateUser.email.setValue(user.email);
        await browser.pause(1000);
        await CreateUser.password.setValue(user.password);

        await browser.pause(2000);

        await CreateUser.submitButton.click();
        await browser.pause(3000);
        // luego validar algo:
        // await expect(CreateUser.successMessage).toBeDisplayed();
        // no tiene mensaje de exito, redirige a home
        saveUser(user);
    });
    

});
