import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Products = () => {
  const { products, get_products, searchIt, add_product } = useContext(CartContext);

  return (
    <ul
      style={{
        width: "95%",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        listStyle: "none",
        overflow: "scroll",
      }}
    >
      {products?.map((product) =>
        product.name === searchIt ? (
          <li
            key={product.id}
            style={{ backgroundColor: "gray", padding: "5px" }}
          >
            <img style={{ width: "100%" }} src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <button
              onClick={() => {
                add_product(product);
              }}
            >
              Adicionar
            </button>
          </li>
        ) : null
      )}
      {products?.map((product) =>
        searchIt === "" ? (
          <li
            key={product.id}
            style={{ backgroundColor: "gray", padding: "5px" }}
          >
            <img style={{ width: "100%" }} src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <button
              onClick={() => {
                add_product(product);
              }}
            >
              Adicionar
            </button>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default Products;
