import React from 'react';
import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import SignIn from './components/auth/SignIn'
import AddPiece from './components/portfolio/AddPiece'
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Home}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/sign_in' component={SignIn} />
        <Route path='/add_piece' component={AddPiece} />
      </div>
    </BrowserRouter>
  );
}

export default App;
