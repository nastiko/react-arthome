import axios from 'axios';

const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;

const token = btoa(`${consumerKey}:${consumerSecret}`);

// const api = axios.create({
//     baseURL: 'https://ecommerce.anastasia-web.dev/wp-json/wc/v3/',
//     headers: {
//         'Authorization': `Basic ${token}`,
//         'Access-Control-Allow-Origin':'*'
//     }
// });

// Function to get all products
// export const getProducts = async() => {
//     try {
//         const response = await api.get('/products');
//         console.log(response.data);
//         return response.data;
//     } catch(error) {
//         console.log('Error fetching products: ', error);
//         throw error;
//     }
// };

export async function getProducts() {
    try {
        const response = await fetch('https://ecommerce.anastasia-web.dev/wp-json/wc/v3/products', {
            headers: {"Authorization": `Basic ${token}`, 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
        });
        return await response.json();
    } catch (error) {
        // catches errors both in fetch and response.json
        console.log(error);
        return {};
    }
}