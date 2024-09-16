import React from 'react'

import Browse from './Browse'
import Log from './Log'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header'



const Body = () => {
const appRouter=createBrowserRouter([
          {
                    path:"/",
                    element:<Log/>,
          },
          {
                    path:"/browse",
                    element:<Browse/>,
          }

])
  return (
    <div>
          <RouterProvider router={appRouter}/>
      
    </div>
  )
  
}

export default Body