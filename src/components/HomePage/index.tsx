import { useState, useContext } from "react";
import LogoTitle from "../LogoTitle";
import { UserContext } from "../../contexts/UserContext";
import Cart from "../Cart";
import Products from "../Products";
import { CartContext } from "../../contexts/CartContext";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  const { logout } = useContext(UserContext);
  const { set_search, set_modal, showModalCart, cart } = useContext(CartContext);

  const items_in_cart = cart.length

  console.log(items_in_cart)

  const [showModalSearch, setShowModalSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
          padding: "10px",
          backgroundColor: "lightgray",
          width: "100%"
        }}
      >
        <LogoTitle />
        <button
          onClick={() => {
            setShowModalSearch(!showModalSearch);
          }}
        style={{border:"none", backgroundColor: "lightgray", fontWeight: "bold"}}>
          🔍
        </button>
        <button onClick={set_modal} style={{border:"none", backgroundColor: "lightgray", fontWeight: "bold"}}>🛒{items_in_cart}</button>
        <button onClick={logout} style={{border:"none", backgroundColor: "lightgray", fontWeight: "bold", fontSize:"14pt"}}>⍈</button>
      </header>
      {showModalSearch === true ? (
        <form
          noValidate
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            width:"90%"
          }}
        >
          <input
            placeholder="Digite aqui sua pesquisa"
            type="text"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
            style={{width: "75%", height:"35px", border: "1pt solid gray", borderRadius:"4px"}}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              set_search(inputSearch);
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
