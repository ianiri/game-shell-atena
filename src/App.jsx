import { FourOhFour, Home } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <FourOhFour></FourOhFour>
  }
])

const App = () => {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
