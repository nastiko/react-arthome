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
import Like from "./pages/Like";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Homepage />} />
            <Route path="like" element={<Like />} />
        </Route>
    )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
