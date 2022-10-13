import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Terms } from './components/Terms';
import Navbar from './components/Navbar';
import Bodys from './components/Bodys';
import Cards from './components/Cards';
import { Form } from './components/Form';

function App() {
  return (
      <Fragment>
      <div className="Background" style={{
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1606636660488-16a8646f012c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}></div>
      <Bodys/>
      <Cards/>
      <Form/>
      <Terms/>   
      </Fragment>

  );
}

export default App;
