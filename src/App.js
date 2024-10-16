import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

//layout
import RootLayout from "./layout/RootLayout";

//pages
import Homepage from "./pages/Homepage";
import AllProducts from "./pages/allProducts/AllProducts";
import Like from "./pages/Like";
import AboutUs from "./pages/AboutUs";
import Post from "./pages/Post";
import ProductView from "./pages/ProductView";

//api
//import "./server";
import {getSlides, getPosts, getUsers, getProducts, getProductById} from "./api";

//combine loaders into one function
export async function combinedLoader() {
    const slides = await getSlides();
    const posts = await getPosts();
    const users = await getUsers();
    return {slides, posts, users}
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route
                index
                element={<Homepage/>}
                loader={combinedLoader}
            />

            <Route path="products"
                   element={<AllProducts/>}
                   loader={() => getProducts()}/>

            <Route path="products/:id"
                   element={<ProductView/>}
                   loader={({params}) => getProductById(params.id)}
            />

            <Route path="like" element={<Like/>}/>
            <Route
                path="post/:id"
                element={<Post/>}
                loader={({params}) => getPosts(params.id)}
            />


            <Route path="about-us" element={<AboutUs/>}/>
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
