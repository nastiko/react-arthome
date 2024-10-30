import {wpApi} from "../api";

/**
 * Get page by slug from WP API
 *
 * @param slug
 * @return {Promise<any>}
 */
export async function getAllPages(slug) {
    try {
        const response = await wpApi.get(`pages?slug=${slug}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching pages: ', error);
        throw error;
    }
}


export function extractAboutUsData(data) {
    return {
        featuredImage: data[0]?.block_data?.[0].attrs.url,
    }
}
