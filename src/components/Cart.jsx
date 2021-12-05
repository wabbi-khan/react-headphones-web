import React from "react";
import "./cart.css";
import { useCart } from "react-use-cart";
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1>Your card is empty</h1>;
  return (
    <section>
      <div>
        <div>
          <h2
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h2>
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ padding: "20px" }}>
                    <img
                      src={item.thumb}
                      style={{ height: "6rem" }}
                      alt="pic"
                    />
                  </td>
                  <td style={{ padding: "20px" }}> {item.product_name} </td>
                  <td>
                    {item.price} {item.currency}
                  </td>
                  <td style={{ padding: "20px" }}>
                    Quantity ({item.quantity}){" "}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cart;
