import axios from 'axios';

const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

const URL_WP_BASE = 'https://ecommerce.anastasia-web.dev/wp-json';
const URL_WC_API_BASE = '/wc/v3';
const URL_WP_API_BASE = '/wp/v2';

const token = btoa(`${consumerKey}:${consumerSecret}`);

const wcApi = axios.create({
    baseURL: `${URL_WP_BASE}${URL_WC_API_BASE}`,
    headers: {
        'Authorization': `Basic ${token}`,
    }
});

const wpApi = axios.create({
    baseURL: `${URL_WP_BASE}${URL_WP_API_BASE}`
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


/**
 * Get all slides from WP API
 *
 * @return {Promise<any>}
 */
export async function getSlides() {
    try {
        const response = await wpApi.get('/slides');
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
}

/**
 * Get all posts from WP API
 *
 * @return {Promise<any>}
 */
export async function getPosts() {
    try {
        const response = await wpApi.get('/posts');
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
}

/**
 * Get posts by id from WP API
 *
 * @param id
 * @return {Promise<any>}
 */
export async function getPostsById(id) {
    try {
        const response = await wpApi.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
}

/**
 * Get media by id from WP API
 *
 * @param id
 * @return {Promise<any>}
 */
export async function getMediaById(id) {
    try {
        const response = await wpApi.get(`media/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
}

/**
 * Get user by id from WP API
 *
 * @param id
 * @return {Promise<any|null>}
 */

export async function getUsersById(id) {
    try {
        const response = await wpApi.get(`users/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
}
