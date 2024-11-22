import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './root'
import root from './root'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Root/>
    </BrowserRouter> */}
    <RouterProvider router={root}/>
  </StrictMode>,
)
