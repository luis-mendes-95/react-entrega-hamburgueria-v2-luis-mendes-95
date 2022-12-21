import React from "react";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, products, showModalCart, set_modal, edit_product_sum, edit_product_sub } = useContext(CartContext);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        backgroundColor: "#808080e3",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "90vw",
          height: "40vh",
          margin: "20px 0 0 0",
          backgroundColor: "white",
        }}
      >
        <div style={{ backgroundColor: "green", display: "flex" }}>
          <h3 style={{ color: "white" }}>Carrinho de compras</h3>
          <button style={{ color: "white" }} onClick={set_modal}>
            X
          </button>
        </div>
        <ul>
          {cart.length > 0 ? (
            cart.map((item) => (
              <li
                key={item.id}
                style={{ backgroundColor: "gray", padding: "5px" }}
              >
                <img style={{ width: "50px" }} src={item.img} alt="" />
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <button onClick={()=>{edit_product_sub(item)}}>-</button>
                <p>{item.qty}</p>
                <button onClick={()=>{edit_product_sum(item)}}>+</button>
              </li>
            ))
          ) : (
            <div>
              <p>Sua sacola está vazia</p>
              <span>Adicione Itens</span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
