import axios from 'axios';

const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

const token = btoa(`${consumerKey}:${consumerSecret}`);

const api = axios.create({
    baseURL: 'https://ecommerce.anastasia-web.dev/wp-json/wc/v3',
    headers: {
        'Authorization': `Basic ${token}`,
    }
});

// Function to get all products
export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        console.log('Error fetching products: ', error);
        throw error;
    }
};


// api slides
export async function getSlides() {
    try {
        const response = await fetch("https://ecommerce.anastasia-web.dev/wp-json/wp/v2/slides");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch slides:', error);
    }
}

// api posts
export async function getPosts(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/posts/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/wp/v2/posts";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch slides:', error);
        return null;
    }
}

// api media
export async function getMedia(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/media/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/wp/v2/media";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch {
        console.error('Failed to fetch slides:', id);
        return null;
    }
}


/*trying to work on with miragejs*/
/*export async function getMedia(id) {
    try {
        const request = await fetch(`/getMedia/${id}`);
        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`);
        }
        return await request.json();
    } catch {
        console.error('Failed to fetch slides:', id);
        return null;
    }
}*/

// api users
export async function getUsers(id) {
    try {
        const url = id ? `https://ecommerce.anastasia-web.dev/wp-json/wp/v2/users/${id}` : "https://ecommerce.anastasia-web.dev/wp-json/users";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch {
        console.error('Failed to fetch users:', id);
        return null;
    }
}
