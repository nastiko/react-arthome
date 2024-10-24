import axios from 'axios';

const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

const URL_WP_BASE = 'https://ecommerce.anastasia-web.dev/wp-json';
const URL_WC_API_BASE = '/wc/v3';

const token = btoa(`${consumerKey}:${consumerSecret}`);

const wcApi = axios.create({
    baseURL: `${URL_WP_BASE}${URL_WC_API_BASE}`,
    headers: {
        'Authorization': `Basic ${token}`,
    }
});

/**
 * Get products from WC API
 *
 * @param page
 * @param perPage
 * @return {Promise<any>}
 */
export const getProducts = async (page = 1, perPage = 6) => {
    try {
        const response = await wcApi.get('/products', {
            params: {
                page: page,
                per_page: perPage,
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
};


/**
 * Get products by id from WC API
 *
 * @param id
 * @return {Promise<any|null>}
 */
export async function getProductById(id) {
    try {
        const response = await wcApi.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch slides:', error);
        return null;
    }
}


export async function getProductByFeatured() {
    try {
        const response = await wcApi.get(`products?featured=true`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch slides:', error);
        return null;
    }
}