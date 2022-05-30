import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";
import Section7 from "./Components/Section7/Section7";
import Chefabout from "./Components/Chefabout/Chefabout";
import ChefList from "./Components/ChefListPages/ChefList";
import Recipes from "./Components/Recipes/Recipes";
import Faq from "./Components/Faq/Faq";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
          </Route>
          <Route path="/chefabout/:id">
            <Chefabout />
          </Route>
          <Route path="/chefListPage">
            <ChefList />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
