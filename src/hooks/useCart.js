import {ContextCart} from "../contextProvider/CartContext";
import {useContext} from "react";

export const useCart = () => {
    /*const [items, setItems] = useState(useLoaderData()); // Store products
    let discount = items.reduce((acc, item) => {
        if(item.sale_price) {
            acc[item.id] = Math.ceil((item.regular_price - item.sale_price) / item.regular_price * 100);
        }

        return acc;
    }, {});
*/

    const {cartItems} = useContext(ContextCart);
    console.log(cartItems);



    return {cartItems};
}