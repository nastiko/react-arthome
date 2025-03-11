import React, {lazy, Suspense} from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route, redirect
} from "react-router-dom";

//api
import {getSlides} from "./models/slidesModel";
import {getPosts, getPostsById} from "./models/postModel";
import {getProducts, getProductById, getProductByFeatured} from "./models/productModel";
import {getAllPages} from "./models/pagesModel";

//layout
import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/homepage/Homepage";

//pages
const AllProducts = lazy(() => import("./pages/allProducts/AllProducts"));
const Like = lazy(() => import ("./pages/favourite/Like"));
const Post = lazy(() => import ("./pages/post/Post"));
const ProductView = lazy(() => import ("./pages/allProducts/ProductView"));
const PageBySlug = lazy(() => import ("./pages/pageBySlug/PageBySlug"));

/**
 * Combine loader into one function
 *
 * @return {Promise<{slides: *, product: *, posts: *}>}
 */

const combinedLoader = async () => {
    const [slides, posts, product, featured] = await Promise.all([
        getSlides(),
        getPosts(),
        getProducts(),
        getProductByFeatured(),
    ]);
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
            />

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
                   loader={() => redirect("/page/not-found")}
            />
        </Route>
    )
)

function App() {
    return (
        <Suspense fallback={
            <div className="flex w-full h-screen justify-center items-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#cacaca] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                     role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                </div>
            </div>
        }>
            <RouterProvider router={router}/>
        </Suspense>
    );
}

export default App;
