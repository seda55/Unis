
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Admin from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Pages from './pages/Pages'

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/pages",
        element:<Pages/>

      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/admin",
        element:<Admin/>
      },
      {
        path:"/catalog",
        element:<Catalog/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },

    ]
}
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
