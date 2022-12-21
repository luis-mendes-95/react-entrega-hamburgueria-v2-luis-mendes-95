import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Products = () => {
  const { products, searchIt, add_product } = useContext(CartContext);

  return (
    <ul
      style={{
        width: "95vw",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        listStyle: "none",
        overflow: "scroll",
        padding: "0 0 15px 0"
      }}
    >
      {products?.map((product) =>
        product.name === searchIt ? (
          <li
            key={product.id}
            style={{ backgroundColor: "white", padding: "5px", border:"1pt solid green" }}
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
            style={{ backgroundColor: "white", padding: "5px", border:"1pt solid green", borderRadius:"8px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}
          >
            <img style={{ width: "100%"}} src={product.img} alt="" />
            <h2 style={{width: "150px", fontSize:"12pt", marginBottom:"10px"}}>{product.name}</h2>
            <p style={{fontSize:"8pt", marginBottom:"10px", color: "gray"}}>{product.category}</p>
            <button
            style={{width: "50%", height: "40px", backgroundColor: "green", border:"none", color:"white", borderRadius:"8px", margin:"10px 0 0 0"}}
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
