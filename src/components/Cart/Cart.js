import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import Title from "../Title";
import { CartColumns, EmptyCart, CartList, CartTotals } from "./CartComponents";

class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          return cart.length > 0 ? (
            <React.Fragment>
              <Title name="your" title="cart" />
              <CartColumns />
              <CartList value={value} />
              <CartTotals value={value} />
            </React.Fragment>
          ) : (
            <EmptyCart />
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Cart;
