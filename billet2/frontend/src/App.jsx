import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Special from './pages/Special'
import Testimonials from './pages/Testimonials'


function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/blog',element:<Blog/>},
      {path:'/contact',element:<Contact/>},
      {path:'/products',element:<Products/>},
      {path:'/special',element:<Special/>},
      {path:'/testimonials',element:<Testimonials/>}
    ]
  }
 ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
