import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import CardPage from './components/CardPage'
import About from './pagess/About'
import Basket from './pagess/Basket'
import Contact from './pagess/Contact'
import Home from './pagess/Home'
import Layout from './pagess/Layout'
import Wishlist from './pagess/Wishlist'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'/', element:<Home/> },
        {path:'about',element:<About/>},
        {path:'contact',element:<Contact/>},
        {path:'wishlist',element:<Wishlist/>},
        {path:'basket',element:<Basket/>}
      ],
    },
  ])

  return (  
    <>   
   
     < RouterProvider router={router}/></>
  )
}

export default App
