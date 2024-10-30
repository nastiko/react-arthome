import { wcApi } from "../api";

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