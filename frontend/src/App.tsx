import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/LandingPage/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/HeaderComponent';

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
