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

// Function to get all products
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

// api id products
export async function getProductById(id) {
    try {
        const response = await wcApi.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch slides:', error);
        return null;
    }
}


// api slides
export async function getSlides() {
    try {
        const response = await wpApi.get('/slides');
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
}

// api posts
export async function getPosts(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/posts/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/wp/v2/posts";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch slides:', error);
        return null;
    }
}

// api media
export async function getMedia(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/media/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/wp/v2/media";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch {
        console.error('Failed to fetch slides:', id);
        return null;
    }
}


/*trying to work on with miragejs*/
/*export async function getMedia(id) {
    try {
        const request = await fetch(`/getMedia/${id}`);
        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`);
        }
        return await request.json();
    } catch {
        console.error('Failed to fetch slides:', id);
        return null;
    }
}*/

// api users
/**
 * Get user by id from WP API
 *
 * @param id
 * @return {Promise<any|null>}
 */
export async function getUsers(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/users/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/users";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch {
        console.error('Failed to fetch users:', id);
        return null;
    }
}
