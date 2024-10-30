import { wpApi } from "../api";

/**
 * Get all posts from WP API
 *
 * @param page
 * @param perPage
 * @return {Promise<any>}
 */
export async function getPosts(page = 1, perPage = 3) {
    try {
        const response = await wpApi.get('/posts', {
            params: {
                page: page,
                per_page: perPage
            }
        });

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