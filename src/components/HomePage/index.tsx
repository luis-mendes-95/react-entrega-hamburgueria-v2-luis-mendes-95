import React, { useState, useContext } from "react";
import LogoTitle from "../LogoTitle";
import { UserContext } from "../../contexts/UserContext";
import Cart from "../Cart";
import Products from "../Products";
import { CartContext } from "../../contexts/CartContext";

const HomePage = () => {
  const { logout } = useContext(UserContext);
  const { set_search } = useContext(CartContext);

  const [showModalSearch, setShowModalSearch] = useState(false);
  const [showModalCart, setShowModalCart] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
 

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          padding: "10px",
        }}
      >
        <LogoTitle />
        <button
          onClick={() => {
            setShowModalSearch(!showModalSearch);
          }}
        >
          search
        </button>
        <button
          onClick={() => {
            setShowModalCart(!showModalCart);
          }}
        >
          cart
        </button>
        <button onClick={logout}>logout</button>
      </header>
      {showModalSearch === true ? (
        <form
          noValidate
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <input
            placeholder="Digite aqui sua pesquisa"
            type="text"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              set_search(inputSearch)
            }}
          >
            Procurar
          </button>
        </form>
      ) : null}
      {showModalCart === true ? <Cart /> : null}
      <section
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Products />
      </section>
    </div>
  );
};

export default HomePage;
