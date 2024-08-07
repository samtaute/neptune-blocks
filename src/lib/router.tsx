import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import FeedPage from "../pages/Feed"
import { feedLoader } from "./loaders"


export const router = createBrowserRouter([
    {path: '/', element: <Home/> },
    {path: '/:platform/:language/:keyword', element: <FeedPage/>, loader:feedLoader}
  ])
    