import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from "./components/Footer"
import {auth} from "./firebase";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDataLayerValue } from './DataLayer';
import Login from "./components/Login"
import LoginPage from './components/LoginPage';
import Checkout from './components/Checkout';
import ProductLayout from './components/ProductLayout';
import WishList from './components/WishList';
import ProductPage from './components/ProductPage';
import ScrollToTop from './components/ScrollToTop';
import Payment from './components/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import SearchProduct from './components/SearchProduct';
import RecommendSlider from './components/RecommendSlider';
const promise = loadStripe("pk_test_51INCOmJdjfHg7jiiGJduQwCeA7U5kaSPPibWLdKPdqWPowJY9hp1J1mIeNux6FQKPIrekVBGttBZ28N5IyV2m5EJ00wKBpBHwd");

function App() {
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("user >>>",authUser);
      if (authUser){
        //user just logged in or was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
      <Switch>

        <Route path="/login">
           <LoginPage />
        </Route>

        <Route path="/userinfo">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/wishList">
          <WishList />
        </Route>

        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
               <Payment />
            </Elements>
          </Route>

        <Route path="/displayProduct/:id" component={Header ,ProductLayout} exact></Route>
        <Route path="/displayProduct/:id/:title" component={Header ,ProductPage} exact></Route>
        <Route path="/searchResult/:inputValue" component={Header ,SearchProduct} exact></Route>
        <Route path="/">
           <Header />
            <Home />
            <RecommendSlider />
            <Footer />
        </Route>


        
      </Switch>  
      </div>
    </Router>
    
  );
}

export default App;
