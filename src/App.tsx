import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Quotes from './components/Quotes';
import AddQuote from './components/AddQuote';
import EditQuote from './components/EditQuote';
import Home from './components/Home';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
      <main>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={Home} path="/" exact={true} />
            <Route component={Quotes} path="/listQuotes" />
            <Route component={AddQuote} path="/addQuote" />
            <Route component={EditQuote} path="/editQuote:id" />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
