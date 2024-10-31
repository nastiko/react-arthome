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
        featuredImageAlt: data[0]?.block_data?.[0].attrs.alt,
        qualityAssurance: [
            data[0]?.block_data?.[3].innerBlocks[0].rendered,
            data[0]?.block_data?.[3].innerBlocks[1].rendered,
            data[0]?.block_data?.[3].innerBlocks[2].rendered,
            data[0]?.block_data?.[3].innerBlocks[3].rendered
        ],
        bannerText: data[0]?.block_data?.[1].rendered,
        gallery: [
            {
                id: 1,
                image: data[0]?.block_data?.[2].innerBlocks?.[0].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[0].attrs.alt
            },
            {
                id: 2,
                image: data[0]?.block_data?.[2].innerBlocks?.[1].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[1].attrs.alt
            },
            {
                id: 3,
                image: data[0]?.block_data?.[2].innerBlocks?.[2].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[2].attrs.alt
            },
            {
                id: 4,
                image: data[0]?.block_data?.[2].innerBlocks?.[3].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[3].attrs.alt
            },
            {
                id: 5,
                image: data[0]?.block_data?.[2].innerBlocks?.[4].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[4].attrs.alt
            }
        ]
    }
}
