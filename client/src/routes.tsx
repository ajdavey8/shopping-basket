import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

const ProductList = lazy(() => import('./routes/ProductList'))
const Checkout = lazy(() => import('./routes/Checkout'))
const CheckoutSuccess = lazy(() => import('./routes/CheckoutSuccess'))

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>} >
    <Switch>
      <Route exact path='/'>
        <ProductList />
      </Route>
      <Route exact path='/checkout'>
        <Checkout />
      </Route>
      <Route exact path='/success'>
        <CheckoutSuccess />
      </Route>
    </Switch>
  </Suspense>
)

export default Routes;

