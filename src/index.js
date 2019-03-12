import axios from 'axios';
const { log } = console;

export class chargify {
    /**
     * 
     * @param {*} subdomain 
     * @param {*} API_KEY provide API_KEY 
     */
    constructor(subdomain, API_KEY) {
        const encoded = Buffer.from(`${API_KEY}:X`).toString('base64');

        this.api = axios.create({
            baseURL: `https://${subdomain}.chargify.com`,
            timeout: 5000,
            headers: {
                Authorization: `Basic ${encoded}`
            }
        });

        return this.api;
    }

    /**
     * 
     * @param {String} url Url
     */
    get(url) {
        return new Promise((resolve, reject) => {
            this.api.get(url)
            .then(res => resolve(res), 5500)
            .catch(err => reject(err.response));
        });
    }

    /**
     * 
     * @param {String} url Url
     * @param {Object} data Request Data
     */
    post(url, data) {
        return new Promise((resolve, reject) => {
            this.api.post(url, data)
            .then(res => resolve(res))
            .catch(err => reject(err.response));
        });        
    }

       /**
     * 
     * @param {String} url Url
     * @param {Object} data Request Data
     */
    put(url, data) {
        return new Promise((resolve, reject) => {
            this.api.put(url, data)
            .then(res => resolve(res))
            .catch(err => reject(err.response));
        });        
    }
    
       /**
     * 
     * @param {String} url Url required to delete
     */
    delete(url) {
        return new Promise((resolve, reject) => {
            this.api.delete(url)
            .then(res => resolve(res))
            .catch(err => reject(err.response));
        });        
    }
}