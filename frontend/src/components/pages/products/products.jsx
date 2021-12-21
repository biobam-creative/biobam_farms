import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Card from "../../ui/card/card";
import { cartContext } from "../../../store/cartContext";

const Products = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const result = await axios("http://127.0.0.1:8000/products/product_list");
      setProducts(result.data);
    }
    getProducts();
  }, []);

  let [cart, setCart] = useContext(cartContext);

  const handleCartClick = (product) => {
    const index = products.indexOf(product);
    product = products[index];
    if (!cart.includes(product)) {
      cart = [...cart, product];
      setCart(cart);
    }
  };
  const handleLike = (product) => {
    products = [...products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    setProducts(products);
  };
  return (
    <div className="row page-padding">
      {products.map((product) => (
        <Card
          key={product.id}
          price={product.price}
          onCartClick={handleCartClick}
          onLike={handleLike}
          data={product}
          title={product.name}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Products;
