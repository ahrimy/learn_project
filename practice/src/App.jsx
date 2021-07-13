import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Testpage from './pages/TestPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/test' component={Testpage} />
          <Route exact path='/' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
