import React from "react";
import "./cart.css";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router";
const Cart = () => {
  const back = useNavigate();
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
          <button
            style={{
              padding: "10px 25px",
              fontSize: "20px",
              backgroundColor: "#86003c",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => back(-1)}
          >
            back
          </button>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 10px",
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
                        backgroundColor: "#EEEEEE",
                        color: "black",
                        fontSize: "25px",
                        padding: "1px 12px",
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
                        backgroundColor: "#EEEEEE",
                        color: "black",
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
                        backgroundColor: "#FD7014",
                        border: "none",
                        color: "white",
                        padding: "10px 32px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                        margin: "4px 2px",
                        cursor: "pointer",
                      }}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ padding: "10px" }}> Total Price: {cartTotal} </h2>
            <button
              style={{
                padding: "15px 30px",
                backgroundColor: "#FD7014",
                border: "none",
                fontSize: "15px",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => emptyCart()}
            >
              PAY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
