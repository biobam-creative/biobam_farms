import { useContext, useEffect } from "react";
import "./style.css";
import { cartContext } from "../../../store/cartContext";
import { Link } from "react-router-dom";
import Button from "../../ui/button/button";

const Cart = () => {
  let [cartProducts, setCartProducts] = useContext(cartContext);

  useEffect(() => {
    cartProducts.map((cartProduct) => (cartProduct.quantity = 1));
    setCartProducts(cartProducts);
  }, []);

  const handleEmptyButton = () => {
    setCartProducts([]);
  };

  const quantity = (cartProduct) => {
    cartProducts = [...cartProducts];
    const index = cartProducts.indexOf(cartProduct);
    cartProducts[index] = { ...cartProducts[index] };
    return !cartProducts[index].quantity ? 1 : cartProducts[index].quantity;
  };

  const handleDecrement = (cartProduct) => {
    cartProducts = [...cartProducts];
    const index = cartProducts.indexOf(cartProduct);
    cartProducts[index] = { ...cartProducts[index] };
    cartProducts[index].quantity = parseInt(cartProducts[index].quantity) - 1;
    cartProducts[index].totalPrice =
      cartProducts[index].quantity * cartProducts[index].price;
    setCartProducts(cartProducts);
  };
  const handleIncrement = (cartProduct) => {
    cartProducts = [...cartProducts];
    const index = cartProducts.indexOf(cartProduct);
    cartProducts[index] = { ...cartProducts[index] };
    cartProducts[index].quantity = parseInt(cartProducts[index].quantity) + 1;

    cartProducts[index].totalPrice =
      cartProducts[index].quantity * cartProducts[index].price;
    setCartProducts(cartProducts);
  };

  const handleDelete = (cartProductId) => {
    cartProducts = cartProducts.filter((c) => c.id !== cartProductId);
    setCartProducts(cartProducts);
  };

  console.log(typeof quantity(cartProducts[1]));

  function total() {
    let totalPrice = cartProducts.map((cartProduct) =>
      parseInt(cartProduct.totalPrice)
    );
    const initialValue = 0;
    const reducer = (accumulator, currentValue, array) => {
      if (array.length === 0) {
        return 0;
      } else {
        return accumulator + currentValue;
      }
    };
    const myTotal = totalPrice.reduce(reducer, initialValue);
    return myTotal;
  }

  {
    if (cartProducts.length === 0) {
      return (
        <div className="row justify-content-center">
          <div className="col-lg-6 justify-content-center">
            <p>Your cart is empty to continue shopping</p>
            <Link to="/products"> Add to Cart</Link>
          </div>
        </div>
      );
    }
  }
  console.log(!cartProducts.quantity ? 1 : cartProducts.quantity);
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th scope="column">Goods</th>
              <th scope="column">Rate</th>
              <th scope="column">Price</th>

              <th scope="column">Qty</th>
              <th scope="column"></th>
              <th scope="column"></th>
              <th scope="column"></th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((cartProduct) => (
              <tr key={cartProduct.id}>
                <th scope="row"></th>
                <td>{cartProduct.name}</td>
                <td>N{cartProduct.price}</td>
                <td>N{parseInt(cartProduct.price) * quantity(cartProduct)}</td>
                <td>{quantity(cartProduct)}</td>
                <td>
                  <Button
                    className="btn-sm increment"
                    handleClick={() => handleDecrement(cartProduct)}
                    disable={cartProduct.quantity <= 1}
                  >
                    -
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn-sm increment"
                    handleClick={() => handleIncrement(cartProduct)}
                  >
                    +
                  </Button>
                </td>
                <td>
                  <i
                    className="fa fa-trash"
                    onClick={() => handleDelete(cartProduct.id)}
                  ></i>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <th scope="row">Total</th>
              <td></td>
              <th scope="row">N{total()}</th>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-sm-6 justify-content-center">
        <button
          className="btn-sm btn-danger btn-block m-3"
          onClick={handleEmptyButton}
        >
          Empty Cart
        </button>
        <button
          className="btn-sm btn-success btn-block"
          onClick={handleEmptyButton}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
