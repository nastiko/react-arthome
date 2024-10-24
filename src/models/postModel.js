import axios from 'axios';

const URL_WP_BASE = 'https://ecommerce.anastasia-web.dev/wp-json';
const URL_WP_API_BASE = '/wp/v2';

const wpApi = axios.create({
    baseURL: `${URL_WP_BASE}${URL_WP_API_BASE}`
});

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