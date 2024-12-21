import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from './routes/bag.jsx'
import Home from './routes/home.jsx'
import { Provider } from "react-redux"
import myntrastore from './store/index.js'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntrastore} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
