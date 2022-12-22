import { useState, useContext } from "react";
import LogoTitle from "../LogoTitle";
import { UserContext } from "../../contexts/UserContext";
import Cart from "../Cart";
import Products from "../Products";
import { CartContext } from "../../contexts/CartContext";
import * as main from "../../styles/main";

const HomePage = () => {
  const { logout } = useContext(UserContext);
  const { set_search, set_modal, showModalCart, cart } =
    useContext(CartContext);

  const items_in_cart = cart.length;

  const [showModalSearch, setShowModalSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  return (
    <main.Div_home_background>
      <main.Header_home>
        <LogoTitle />
        <div style={{display: "flex", gap:"25px"}}>
          <main.Button_search
            onClick={() => {
              setShowModalSearch(!showModalSearch);
            }}
          >
            🔍
          </main.Button_search>
          <main.Button_cart onClick={set_modal}>
            🛒{items_in_cart}
          </main.Button_cart>
          <main.Button_logout onClick={logout}>⍈</main.Button_logout>
        </div>
      </main.Header_home>
      {showModalSearch === true ? (
        <main.Form_search>
          <main.Input_search
            placeholder="Digite aqui sua pesquisa"
            type="text"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
          <main.Button_submit_search
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              set_search(inputSearch);
            }}
          >
            Procurar
          </main.Button_submit_search>
        </main.Form_search>
      ) : null}
      {showModalCart === true ? <Cart /> : null}
      <main.Section_products>
        <Products />
      </main.Section_products>
    </main.Div_home_background>
  );
};

export default HomePage;
