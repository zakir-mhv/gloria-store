import { ProductProvider } from "./context";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
