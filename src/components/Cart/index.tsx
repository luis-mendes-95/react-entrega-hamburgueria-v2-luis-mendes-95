import React from "react";

const Cart = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "absolute", backgroundColor: "gray" }}>
      <div style={{ width: "90vw", height: "40vh" }}>
        <div style={{backgroundColor: "green"}}>
            <h3 style={{color: "white"}}>Carrinho de compras</h3>
            <button style={{color: "white"}}>X</button>
        </div>
        <div>
            <p>Sua sacola está vazia</p>
            <span>Adicione Itens</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
