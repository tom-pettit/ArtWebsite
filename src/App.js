import React from 'react';
import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import SignIn from './components/auth/SignIn'
import AddPiece from './components/portfolio/AddPiece'
import ViewPiece from './components/portfolio/ViewPiece'
import Shop from './components/shop/Shop'
import ViewForSale from './components/shop/ViewForSale'
import { BrowserRouter, Route } from 'react-router-dom'
import AddForSalePiece from './components/shop/AddForSalePiece';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Home}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/sign_in' component={SignIn} />
        <Route path='/add_piece' component={AddPiece} />
        <Route path='/view_piece/:id' component={ViewPiece} />
        <Route path='/shop' component={Shop} />
        <Route path='/for_sale/:id' component={ViewForSale} />
        <Route path='/add_piece_for_sale' component={AddForSalePiece} />
      </div>
    </BrowserRouter>
  );
}

export default App;
