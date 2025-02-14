import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from '../components/Footer.jsx'
import { Category } from '../pages/Category.jsx'
import DetailProduct from '../pages/DetailProduct.jsx'
import { Cart } from '../pages/Cart.jsx'
import { Grill } from '../pages/Grill.jsx'
import Events from '../pages/Events.jsx'
import MenuHome from '../pages/MenuHome.jsx'


import Menu from '../pages/Menu'
import AddProducts from '../components/Pages/Menu/AddProducts.jsx'

// import Login from '../components/Pages/Login/Login.jsx'
import Register from '../components/Pages/Login/Register.jsx'
import Index from '../components/Dash/Index.jsx'
import Login from '../components/Pages/Login/Login.jsx'

import ProtectedRoute from '../components/ProtectedRoute.jsx'
import { TableCarts } from '../components/Dash/components/TableCarts.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import EditOrder from '../components/Dash/EditOrder.jsx'
import Products from '../components/Dash/Pages/Products.jsx'
import Users from '../components/Dash/Pages/Users.jsx'
import CreateUser from '../components/Dash/Pages/CreateUser.jsx'
import Customers from '../components/Dash/Pages/Customers.jsx'
import Branches from '../components/Dash/Pages/Branches.jsx'
import CreateBranches from '../components/Dash/Pages/CreateBranches.jsx'
import CreateCustomer from '../components/Dash/Pages/CreateCustomer.jsx'
import Report from '../components/Dash/Pages/Report.jsx'
import OrdersCustomer from '../components/Dash/Pages/OrdersCustomer.jsx'
import OrdersUser from '../components/Dash/Pages/OrdersUser.jsx'
import Orders from '../components/Dash/Pages/Orders.jsx'
import ProtectedRouteAdmin from '../components/ProtectedRouteAdmin.jsx'

// import login from '../components/Pages/Login/login.jsx'

export default function MainRouter() {
  return (
    // BrowserRouter trabaja con children, su hijo es Routes
    <BrowserRouter>
      <ScrollToTop />
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/grill' element={<Grill />} />
        <Route path='/menuIndex' element={<MenuHome />} />
        <Route path='/events' element={<Events />} />




        {/* register y login */}
        <Route path='/session/login' element={<Login />} />
        <Route path='/session/register' element={<Register />} />

        {/* index dashboard */}

        <Route element={<ProtectedRoute />}>

          <Route path='/menu' element={<Menu />} />
          <Route path='/menu/category/:id' element={<Category />} />
          <Route path='/menu/item/:id' element={<DetailProduct />} />

          {/* carrito en proceso de compra */}
          <Route path='/cart' element={<Cart />} />
          {/* ordenes de usuario */}
          <Route path='/dash/carts/user' element={<TableCarts />} />
          {/* Crea Ticket de orden / cierra compra */}
          <Route path='/dash/order/:cid' element={<EditOrder />} />

          <Route element={<ProtectedRouteAdmin />}>

            {/* Productos */}
            <Route path='/menu/products' element={<Products />} />
            <Route path='/menu/addproduct' element={<AddProducts />} />

            {/* users */}
            <Route path='/dash/users' element={<Users />} />
            <Route path='/dash/adduser' element={<CreateUser />} />
            <Route path='/dash/orders/user/:uid' element={<OrdersUser />} />

            {/* Customers */}
            <Route path='/dash/customers' element={<Customers />} />
            <Route path='/dash/addcustomer' element={<CreateCustomer />} />
            <Route path='/dash/customer/:cuid' element={<OrdersCustomer />} />

            {/* Branches */}
            <Route path='/dash/branches' element={<Branches />} />
            <Route path='/dash/addbranch' element={<CreateBranches />} />

            {/* Report */}
            <Route path='/dash/report' element={<Report />} />

            {/* Orders */}
            <Route path='/dash/orders' element={<Orders />} />

          </Route>

        </Route>

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}