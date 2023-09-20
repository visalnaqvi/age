import './App.css';
import Nav from "./components/Nav/Nav"
import Home from './components/Home/Home';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import ContactUs from './components/contact/contactUs';
import Footer from "./components/footer/Footer";
import AboutUs from './components/contact/AboutUs/AboutUs';
import Services from './components/services/services';
import Login from './components/register/login';
function App() {
  return (
    <Router>
    <Nav></Nav>
    <Login></Login>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/contact-us">
          <ContactUs></ContactUs>
      </Route>
      <Route exact path="/about-us">
        <AboutUs></AboutUs>
      </Route>
      <Route exact path="/services">
        <Services></Services>
      </Route>
      <Route exact path="/register">
        <Login></Login>
      </Route>
    </Switch>
    <Footer></Footer>
    </Router>
  );
}

export default App;
