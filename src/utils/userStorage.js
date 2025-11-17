const fs = require('fs');
const path = require('path');

// Guardamos el archivo en /test/tempUser.json
const FILE_PATH = path.join(__dirname, '..', 'po', 'data', 'tempUser.json');

function saveUser(user) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(user, null, 2), 'utf-8');
}

function loadUser() {
    if (!fs.existsSync(FILE_PATH)) {
        throw new Error(
            'No se encontró el archivo tempUser.json — asegurate de correr primero el test de registro.'
        );
    }

    const content = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(content);
}

module.exports = { saveUser, loadUser };