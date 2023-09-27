import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home.jsx'
import DonationDetails from './component/DonationDetails.jsx'
import DonatedDetails from './component/DonatedDetails.jsx'
import Statistics from './component/Statistics.jsx'
import ErrorPage from './component/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: (() => fetch('/donation.json') )
      },
      {
        path: "/donation",
        element:<DonatedDetails></DonatedDetails>,
        loader: (() => fetch('/donation.json'))
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
