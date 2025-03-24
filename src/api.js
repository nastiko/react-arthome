import Axios from 'axios';
import {setupCache} from 'axios-cache-interceptor';

const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

const URL_WP_BASE = 'https://ecommerce.anastasia-web.dev/wp-json';
const URL_WP_API_BASE = '/wp/v2';
const URL_WC_API_BASE = '/wc/v3';

const token = btoa(`${consumerKey}:${consumerSecret}`);

const wpApiInstance = Axios.create({
    baseURL: `${URL_WP_BASE}${URL_WP_API_BASE}`
});
const wpApi = setupCache(wpApiInstance);

const wcApiInstance = Axios.create({
    baseURL: `${URL_WP_BASE}${URL_WC_API_BASE}`,
    headers: {
        'Authorization': `Basic ${token}`,
    }
});
const wcApi = setupCache(wcApiInstance);

export {wpApi, wcApi}
