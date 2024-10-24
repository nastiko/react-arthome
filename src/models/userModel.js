import axios from 'axios';

const URL_WP_BASE = 'https://ecommerce.anastasia-web.dev/wp-json';
const URL_WP_API_BASE = '/wp/v2';

const wpApi = axios.create({
    baseURL: `${URL_WP_BASE}${URL_WP_API_BASE}`
});


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