import React from 'react';
import Inicio from './pages/Inicio'
import Header from './components/Header';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom'
import Cesta from './pages/Cesta';
import { datosProductos } from './api/Api'
import Producto from './components/Producto';
import Login from './pages/Login';
import About from './components/About';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path: '/',
        element:<Inicio />,
        loader: datosProductos
      },
      {
        path: '/about',
        element:<About />
      },
      {
        path: '/product/:id',
        element: <Producto />
      },
      {
        path: '/cesta',
        element: <Cesta />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
