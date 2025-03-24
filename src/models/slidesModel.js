import {wpApi} from "../api";

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