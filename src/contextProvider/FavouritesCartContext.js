import {createContext, useEffect, useState} from "react";

export const ContextFavouritesCart = createContext();

export default function FavouritesCartContext({children}) {
    const storedFavouriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    const [favouriteItems, setFavouriteItems] = useState(storedFavouriteItems);
    const [isFavouriteIcon, setIsFavouriteIcon] = useState(false);

    const ifExists = (obj) => {
        if (favouriteItems.find((item) => item.id === obj.id)) {
            setFavouriteItems(prev => prev.filter((item) => item.id !== obj.id));
            setIsFavouriteIcon(false);
        } else {
            setFavouriteItems(prev => [...prev, obj]);
            setIsFavouriteIcon(true);
        }
    }

    useEffect(() => {
        localStorage.setItem("favoriteItems", JSON.stringify(favouriteItems));
    }, [favouriteItems]);

    return (
        <ContextFavouritesCart.Provider
            value={{
                favouriteItems,
                setFavouriteItems,
                isFavouriteIcon,
                ifExists
            }}>
            {children}
        </ContextFavouritesCart.Provider>
    )
}

