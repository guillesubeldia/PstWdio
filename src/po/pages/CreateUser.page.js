class CreateUserPage {
    open() {
        return browser.url('/auth/register');
    }
    async isLoaded() {
        const url = await browser.getUrl();
        if (!url.includes('register')) {
            throw new Error(`expected url to include "register" but got "${url}"`);
        }
        await this.form.waitForDisplayed({ timeout: 5000 });
    }
    get form() {
        return $('[data-test="register-form"]');
    }

    get firstName(){
        return $('#first_name');
    }
    get lastName(){
        return $('#last_name');
    }
    get dateOfBirth(){
        return $('#dob');
    }
    get streetAddress(){
        return $('#street');
    }

    get postalCode(){
        return $('#postal_code');
    }

    get city(){
        return $('#city');
    }

    get state(){
        return $('#state');
    }

    get country(){
        return $('#country')
    }

    get phone(){
        return $('#phone');
    }
    
    get email(){
        return $('#email');
    }

    get password(){
        return $('#password');
    }

    get submitButton(){
        return $('[data-test="register-submit"]');
    }

    get successMessage(){
        return $('[data-test="register-success"]');
    }

}

module.exports = new CreateUserPage();