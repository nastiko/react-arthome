import { wpApi } from "../api";

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