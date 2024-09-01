import {getProducts} from '../api';
import {useEffect, useState} from "react";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                getProducts().then(data => {
                    if (data) {
                        setProducts(data);
                    } else {
                        throw new Error('Network error during loading products');
                    }
                });
            } catch (error) {
                setError('Failed to fetch products');
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>Here is product page</>
    )
}