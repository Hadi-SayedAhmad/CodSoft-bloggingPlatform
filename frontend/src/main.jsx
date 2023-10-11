import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
import PrivateRoute from './pages/PrivateRoute.jsx'
import CreateBlog from './pages/CreateBlog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' index={true} element={<Home />}></Route>
      <Route path='/sign-in' element={<SignIn />}></Route>
      <Route path='/sign-up' element={<SignUp />}></Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-blog' element={<CreateBlog />}></Route>
      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
