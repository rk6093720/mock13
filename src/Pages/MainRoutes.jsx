import React from 'react'
import { Routes, Route} from "react-router-dom"

import Home from './Home'
import Product from './Product'
import Search from './Search'

const MainRoutes = () => {
    return (
        <Routes>
          <Route path='/index' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
    )
}

export default MainRoutes
