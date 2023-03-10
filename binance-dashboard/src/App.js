import React from 'react'
import Dashboard from './Pages/Dashboard'
import User from './Pages/User'
import Blog from './Pages/Blog'
import Product from './Pages/Product'


import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Login from './Pages/LoginEnter'
import Registration from './Pages/LoginRegistration'
import Page404 from './Pages/Page404/Page404'
const App = () => {
  return (
    <React.Fragment>
      <Router>
          <Routes>
              <Route path="/">
                <Route index element={<Dashboard/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="user" element={<User/>} />
                <Route path="product" element={<Product/>} />
                <Route path="blog" element={<Blog/>} />
                <Route path="404" element={<Page404/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="registration" element={<Registration/>}/>

          </Route>
        </Routes>
      </Router>
    </React.Fragment>

  )
}

export default App