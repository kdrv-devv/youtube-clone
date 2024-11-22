import React from 'react'
import { createBrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Navbar from '../components/navbar'
import Users from '../pages/users'
import UserItem from '../components/user-item'
import Dashboard from '../pages/dashboard'
import Group from '../components/group'
import Students from '../components/students'
import HomePage from '../components/homepage'
import Explore from '../components/explore'
import Subscribe from '../components/subscribe'
import Login from '../pages/login'
import UserPage from '../pages/userPage'
import ProtectRoute from '../components/protect-route'


// export const root = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/",
//     element:<Home/>
//   },
// ])

  const token = localStorage.getItem("token")

  const root  = createBrowserRouter([
    {
      path:'/',
      element:<Dashboard/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"explore",
          element:<Explore/>
        },
        {
          path:"subscribe",
          element:<Subscribe/>
        },
     
        {
          path:'userpage',
          element:<ProtectRoute token={token}> <UserPage/> </ProtectRoute>
        }

      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:"*",
      element:<h1 className='text-[60px]'> 404 Not Found</h1>
    }
   
  ])



// const Root = () => {
//   return ( <>
//   <Navbar/>
//    <Routes>
//    <Route path='/' element={<Dashboard/>}>
//       <Route index element={<HomePage/>} />
//       <Route path='/explore' element={<Explore/>} />
//       <Route path='/subscribe' element={<Subscribe/>} />
//     </Route>
//     <Route path='/home' element={<Home/>} />
//     <Route path='/about' element={<About/>} />
//     <Route path='/contact' element={<Contact/>} />
//     <Route path='/users' element={<Users/>} />
//     <Route path='/users/:id' element={<UserItem/>} />
//     <Route path='/students' element={<Students/>} />
//     <Route path='/login' element={<Login/>} />
//   </Routes>
//   </>
//   )
// }

export default root