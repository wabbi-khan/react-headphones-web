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
                    Quantity ({item.quantity})
                  </td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "yellow",
                        color: "white",
                        fontSize: "25px",
                        padding: "1px 10px",
                        border: "none",
                        marginRight: "15px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      style={{
                        backgroundColor: "yellow",
                        color: "white",
                        fontSize: "25px",
                        padding: "1px 10px",
                        border: "none",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      style={{
                        backgroundColor: "yellow",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        marginRight: "20px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
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
