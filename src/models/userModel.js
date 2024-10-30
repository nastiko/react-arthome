import { wpApi } from "../api";

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