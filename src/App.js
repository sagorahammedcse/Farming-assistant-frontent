import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Aboutus from './component/About/Aboutus';
import Login from './component/user/Login';
import Footer from './component/Home/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './component/user/Register';
import axios from 'axios';
import Profile from './component/user/Profile';
import ProductDetails from './component/Products/ProductDetails';
import Cart from './component/Cart/Cart';
import Posts from './component/post/Posts';
import ProtectedRoute from './component/Route/ProtectedRoute';
import { useSelector } from 'react-redux';
import store from './store';
import { loadUser } from './component/action/userAction';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from './component/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Success from './component/Cart/Success';

import 'react-multi-carousel/lib/styles.css';

function App() {

  axios.defaults.withCredentials = true;
  const { isAuthenticated } = useSelector((state) => state.user);
  // sate for stripe 
  const [stripeApiKey, setStripeApiKey] = useState("");


  async function getStripeApiKey() {
    const { data } = await axios.get("http://localhost:5000/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
    // console.log(data.stripeApiKey);
  }

  useEffect(() => {

    store.dispatch(loadUser())
    getStripeApiKey();
  }, [])

  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<Aboutus />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

        <Route path='/products/:productId' element={<ProductDetails />}></Route>
        <Route path='/post' element={<Posts />}></Route>

        {/* cart will be protected route */}

        {/* protected route for user */}

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/shipping' element={<Shipping />} ></Route>
          <Route path='/order/confirm' element={<ConfirmOrder />} ></Route>
          <Route>
            {stripeApiKey && (
              <Route
                path="/process/payment"

                element={
                  <Elements stripe={loadStripe(stripeApiKey)} >
                    <Payment stripeApiKey={stripeApiKey} />
                  </Elements>
                }
              >

              </Route>
            )}
          </Route>
          <Route path='/success' element={<Success />} ></Route>
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
