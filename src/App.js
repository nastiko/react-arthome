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
import Products from "./pages/Products";
import Like from "./pages/Like";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Homepage />} />
            <Route path="products" element={<Products />} />
            <Route path="like" element={<Like />} />


            <Route path="about-us" element={<AboutUs />} />
        </Route>
    )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
