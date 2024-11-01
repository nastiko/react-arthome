import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route, redirect
} from "react-router-dom";

//layout
import RootLayout from "./layout/RootLayout";

//pages
import Homepage from "./pages/Homepage";
import AllProducts from "./pages/allProducts/AllProducts";
import Like from "./pages/Like";
import Post from "./pages/Post";
import ProductView from "./pages/ProductView";
import PageBySlug from "./pages/PageBySlug";

//api
//import "./server";
import {getSlides} from "./models/slidesModel";
import {getPosts, getPostsById} from "./models/postModel";
import {getProducts, getProductById, getProductByFeatured} from "./models/productModel";
import {getAllPages} from "./models/pagesModel";


/**
 * Combine loader into one function
 *
 * @return {Promise<{slides: *, product: *, posts: *}>}
 */
export async function combinedLoader() {
    const slides = await getSlides();
    const posts = await getPosts();
    const product = await getProducts();
    const featured = await getProductByFeatured();
    return {slides, posts, product, featured}
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route
                index
                element={<Homepage/>}
                loader={combinedLoader}
            />

            <Route
                path="post/:id"
                element={<Post/>}
                loader={({params}) => getPostsById(params.id)}
            />

            <Route path="products"
                   element={<AllProducts/>}
                   loader={() => getProducts()}/>

            <Route path="products/:id"
                   element={<ProductView/>}
                   loader={({params}) => getProductById(params.id)}
            />

            <Route path="like" element={<Like/>}/>


            <Route path="page/:slug"
                   element={<PageBySlug/>}
                   loader={({params}) => getAllPages(params.slug)}
            />

            <Route path="*"
                   loader={() =>redirect("/page/not-found")}
            />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
