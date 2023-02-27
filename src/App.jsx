import { FourOhFour, Home, Play, Profile, Rank, Ranks } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <FourOhFour></FourOhFour>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/play',
    element: <Play></Play>
  },
  {
    path: '/ranks',
    element: <Ranks></Ranks>
  },
  {
    path: '/rank',
    element: <Rank></Rank>
  }
])

const App = () => {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
