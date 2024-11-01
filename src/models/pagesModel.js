import {wpApi} from "../api";
import {redirect} from "react-router-dom";

/**
 * Get page by slug from WP API
 *
 * @param slug
 * @return {Promise<any>}
 */
export async function getAllPages(slug) {
    try {
        const response = await wpApi.get(`pages?slug=${slug}`);
        if (response.status === 200 && response.data && response.data?.length > 0) {
            return response.data;
        } else {
            return redirect("/page/not-found");
        }
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
            {
                iconType: 'RiShoppingBag4Line',
                quality: data[0]?.block_data?.[3].innerBlocks[0].rendered
            },
            {
                iconType: 'ImPaypal',
                quality: data[0]?.block_data?.[3].innerBlocks[1].rendered
            },
            {
                iconType: 'SlCursor',
                quality: data[0]?.block_data?.[3].innerBlocks[2].rendered
            },
            {
                iconType: 'MdOutlineTimer',
                quality: data[0]?.block_data?.[3].innerBlocks[3].rendered
            },

        ],
        bannerText: data[0]?.block_data?.[1].rendered,
        gallery: [
            {
                image: data[0]?.block_data?.[2].innerBlocks?.[0].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[0].attrs.alt
            },
            {
                image: data[0]?.block_data?.[2].innerBlocks?.[1].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[1].attrs.alt
            },
            {
                image: data[0]?.block_data?.[2].innerBlocks?.[2].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[2].attrs.alt
            },
            {
                image: data[0]?.block_data?.[2].innerBlocks?.[3].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[3].attrs.alt
            },
            {
                image: data[0]?.block_data?.[2].innerBlocks?.[4].attrs.url,
                alt: data[0]?.block_data?.[2].innerBlocks?.[4].attrs.alt
            }
        ]
    }
}

export function extractNotFoundData(data) {
    return {
        featuredImage: data[0]?.block_data?.[0].attrs.url,
        featuredImageAlt: data[0]?.block_data?.[0].attrs.alt
    }
}
