import { chargify } from './dist/chargify-rest';
const { log } = console;

const c = new chargify('Chagify sub domain', 'API KEY');

(function getChargify() {
    c.get('subscriptions.json')
        .then(res => log('RES', res))
        .catch(err => log('ERR', err));
})();
