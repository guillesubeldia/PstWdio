import CreaterUse from '../po/pages/CreateUser.page.js'
import { generateUser } from '../utils/userFactory.js';

describe('User registration', () => {
    it('should create a new user', async () => {
        const newUser = generateUser();

        await RegisterPage.open();
        await RegisterPage.fillForm(newUser);
        await RegisterPage.submit();

    });
});