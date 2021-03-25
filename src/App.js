import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';

//import components
import Nav from './components/Nav';

function App() {
  const location = useLocation()
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' component={AboutUs} exact />
          <Route path='/work' component={OurWork} exact />
          <Route path='/work/:id' component={MovieDetail} />
          <Route path='/contact' component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
