import React, { useState, useContext } from "react";
import LogoTitle from "../LogoTitle";
import { AuthContext } from "../../contexts/auth";
import Cart from "../Cart";

const HomePage = () => {
  const { logout } = useContext(AuthContext);

  const [showModalSearch, setShowModalSearch] = useState(false);
  const [showModalCart, setShowModalCart] = useState(false);

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
        <button           onClick={() => {
            setShowModalCart(!showModalCart);
          }}>cart</button>
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
          <input placeholder="Digite aqui sua pesquisa" type="text" />
          <button type="submit">Procurar</button>
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
        <ul style={{ width: "95%" }}>
          <li style={{ width: "50%", backgroundColor: "gray", padding: "5px" }}>
            <img
              style={{ width: "100%" }}
              src="https://blog.novasafra.com.br/wp-content/uploads/2022/04/Carnes-para-hamburguer-veja-as-6-melhores-que-voce-deve-experimentar-780x450.jpeg"
              alt=""
            />
            <h2>Lanche delicious</h2>
            <p>Delicious mesmo, até sem ketchup</p>
            <p>R$ 2,50</p>
            <button>Adicionar</button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
