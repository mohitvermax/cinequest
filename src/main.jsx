import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './components/Home'; 
import Movies from './components/Movies';
import About from './components/About';
import Layout from './Layout.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';
import TopRated from './components/TopRated.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='movies' element={<Movies />}/>
      <Route path='register' element={<Register />}/>
      <Route path='login' element={<Login />}/>
      <Route path='search' element={<Search />}/>
      <Route path="movie/:id" element={<Movie/>} />
      <Route path="/movies/:page" element={<Movies/>} />
      <Route path="/toprated/:page" element={<TopRated/>} />


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
