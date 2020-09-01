import React from 'react';
import HomePage from './components/home-page/home-page';
import './App.css';
import MenuNavigation from './components/menu-navigation/menu-navigation';

import ContactUs from './components/contact-us/contact-us';
import AboutUs from './components/about-us/about-us';
import ShopNow from './components/shop-now/shop-now';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <MenuNavigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/shop-now" component={ShopNow} />
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
