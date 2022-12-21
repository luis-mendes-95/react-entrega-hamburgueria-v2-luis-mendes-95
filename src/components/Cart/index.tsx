import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import * as cartTag from "../../styles/cart";

const Cart = () => {
  const {
    cart,
    set_modal,
    edit_product_sum,
    edit_product_sub,
    delete_product,
    empty_card,
  } = useContext(CartContext);

  const totalCart = cart
    .map((item) => item.price * item.qty)
    .reduce(function (total, numero) {
      return total + numero;
    }, 0);

  return (
    <cartTag.Div_background_cart>
      <cartTag.Div_cart_window>
        <cartTag.Div_title_and_button>
          <cartTag.H3_title>Carrinho de compras</cartTag.H3_title>
          <cartTag.Button_close onClick={set_modal}>X</cartTag.Button_close>
        </cartTag.Div_title_and_button>
        <cartTag.Ul_cart_items>
          {cart.length > 0 ? (
            cart.map((item) => (
              <cartTag.Li_cart_item key={item.id}>
                <cartTag.Img_cart_item src={item.img} alt="food-image" />
                <cartTag.Div_item_name>
                  <cartTag.H2_item_name>{item.name}</cartTag.H2_item_name>
                  <cartTag.Div_buttons_card>
                    <cartTag.Button_subtract_item
                      onClick={() => {
                        edit_product_sub(item);
                      }}
                    >
                      -
                    </cartTag.Button_subtract_item>
                    <cartTag.P_item_qty>{item.qty}</cartTag.P_item_qty>
                    <cartTag.Button_sum_item
                      onClick={() => {
                        edit_product_sum(item);
                      }}
                    >
                      +
                    </cartTag.Button_sum_item>
                  </cartTag.Div_buttons_card>
                </cartTag.Div_item_name>
                <cartTag.Button_delete_cart_item
                  onClick={() => {
                    delete_product(item);
                  }}
                >
                  🗑
                </cartTag.Button_delete_cart_item>
              </cartTag.Li_cart_item>
            ))
          ) : (
            <cartTag.Div_empty_bag>
              <cartTag.P_empty_bag>Sua sacola está vazia</cartTag.P_empty_bag>
              <cartTag.Span_add_items>Adicione Itens</cartTag.Span_add_items>
            </cartTag.Div_empty_bag>
          )}
          <cartTag.Div_total_and_empty>
            <cartTag.Div_total>
              <cartTag.P_total>Total</cartTag.P_total>
              <cartTag.P_value>R$ {totalCart.toFixed(2)}</cartTag.P_value>
            </cartTag.Div_total>
            <cartTag.Button_remove_all onClick={empty_card}>
              Remover Todos
            </cartTag.Button_remove_all>
          </cartTag.Div_total_and_empty>
        </cartTag.Ul_cart_items>
      </cartTag.Div_cart_window>
    </cartTag.Div_background_cart>
  );
};

export default Cart;
