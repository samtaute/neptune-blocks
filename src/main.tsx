import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FeedPage  from './pages/Feed.tsx'
import { feedLoader } from './lib/loaders.ts'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/:platform/:language/:keyword', element: <FeedPage/>, loader:feedLoader}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

