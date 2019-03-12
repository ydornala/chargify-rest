import { chargify } from './dist/chargify-rest';
const lib = require('./dist/chargify-rest');
const { log } = console;

// log(lib.chargify);

const c = new lib.chargify('wave-oncloud-kodiak', 'v7fLgaupnoTbAnFVe8FtV1NOogsSpN7538ovPrSXuc');
const d = new chargify('wave-oncloud-kodiak', 'v7fLgaupnoTbAnFVe8FtV1NOogsSpN7538ovPrSXuc');

(function getChargify() {
    c.get('/subscriptions.json')
        .then(res => log('RES', res))
        .catch(err => log('ERR', err));
})();
