import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Global Style
import GlobalStyle from './components/GlobalStyle';

//import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail'

//import components
import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' component={AboutUs} exact />
        <Route path='/work' component={OurWork} exact />
        <Route path='/work/:id' component={MovieDetail} />
        <Route path='/contact' component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
