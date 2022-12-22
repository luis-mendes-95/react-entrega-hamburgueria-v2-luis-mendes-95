import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import * as main from "../../styles/main";

const Products = () => {
  const { products, searchIt, add_product } = useContext(CartContext);

  return (
    <main.Ul_products>
      {products?.map((product) =>
        product.name === searchIt ? (
          <main.Li_product key={product.id}>
            <main.Img_product src={product.img} alt={product.name} />
            <main.H2_product_name>{product.name}</main.H2_product_name>
            <main.P_category>{product.category}</main.P_category>
            <main.Button_add_to_cart
              onClick={() => {
                add_product(product);
              }}
            >
              Adicionar
            </main.Button_add_to_cart>
          </main.Li_product>
        ) : null
      )}
      {products?.map((product) =>
        searchIt === "" ? (
          <main.Li_product key={product.id}>
            <main.Img_product src={product.img} alt={product.name} />
            <main.H2_product_name>{product.name}</main.H2_product_name>
            <main.P_category>{product.category}</main.P_category>
            <main.Button_add_to_cart
              onClick={() => {
                add_product(product);
              }}
            >
              Adicionar
            </main.Button_add_to_cart>
          </main.Li_product>
        ) : null
      )}
    </main.Ul_products>
  );
};

export default Products;
