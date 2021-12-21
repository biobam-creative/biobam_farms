import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/ui/navbar/navbar";
import Blog from "./components/pages/blog/blog";
import Forum from "./components/pages/forum/forum";
import Home from "./components/pages/home/home";
import Products from "./components/pages/products/products";
import Favorites from "./components/pages/favorites/favorites";
import Cart from "./components/pages/cart/cart";

import "font-awesome/css/font-awesome.css";
import CartContextProviver from "./store/cartContext";

function App() {
  return (
    <div className="App">
      <CartContextProviver>
        <NavBar />
        <div>
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/forum" component={Forum} />
            <Route path="/products" component={Products} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/cart" component={Cart} />

            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </CartContextProviver>
    </div>
  );
}

export default App;
