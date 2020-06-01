import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import ContactAndDeliveryPage from './pages/ContactAndDeliveryPage';
import ShoppingBagPage from './pages/ShoppingBagPage';
import KulinarnyyTsekhPage from './pages/KulinarnyyTsekhPage';
import KulinarnyyTsekhSections from './components/KulinarnyyTsekhSections';
import ProductPage from './pages/ProductPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/contact-and-delivery"
          component={ContactAndDeliveryPage}
        />
        <Route path="/shopping-bag" component={ShoppingBagPage} />
        <Route path="/kulinarnyy-tsekh" exact component={KulinarnyyTsekhPage} />
        <Route
          path="/kulinarnyy-tsekh/:sectionName"
          exact
          component={KulinarnyyTsekhSections}
        />
        <Route
          path="/kulinarnyy-tsekh/:sectionName/:productId"
          component={ProductPage}
        />
        <Route path="/services" exact component={ServicesPage} />
      </Switch>
    </Layout>
  );
}

export default App;
