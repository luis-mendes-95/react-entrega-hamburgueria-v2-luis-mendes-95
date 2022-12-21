import styled from "styled-components";

export const Div_background_cart = styled.div`
  background-color: #808080e3;
  width: 100vw;
  position: absolute;
  background-color: #808080e3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 10px 0;
`;

export const Div_cart_window = styled.div`
  width: 90vw;
  margin: 20px 0 0 0;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`;

export const Div_title_and_button = styled.div`
  background-color: green;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

export const H3_title = styled.h3`
  color: white;
`;

export const Button_close = styled.button`
  color: white;
  border: none;
  background-color: green;
  font-weight: bold;
  cursor: pointer;
`;

export const Ul_cart_items = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px 0px;
  list-style: none;
`;

export const Li_cart_item = styled.li`
  padding: 5px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Img_cart_item = styled.img`
  width: 50px;
`;

export const H2_item_name = styled.h2`
  font-size: 15px;
`;

export const P_item_category = styled.p``;

export const Button_subtract_item = styled.p`
  color: red;
`;

export const P_item_qty = styled.p`
  background-color: white;
  width: 75%;
`;

export const Button_sum_item = styled.p`
  color: red;
`;

export const Div_empty_bag = styled.div``;

export const P_empty_bag = styled.p`
  font-weight: bold;
  color: black;
`;

export const Span_add_items = styled.p`
  margin-top: 10px;
  font-size: 8pt;
`;

export const Div_item_name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Div_buttons_card = styled.div`
  display: flex;
  background-color: gray;
  justify-content: space-around;
  border-radius: 2px;
  width: 80px;
`;

export const Button_delete_cart_item = styled.button`
  background-color: white;
  border: none;
  font-weight: bold;
  font-size: 15pt;
`;

export const Div_total_and_empty = styled.div``;

export const Div_total = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 15px;
  border-top: 1pt solid gray;
`;

export const P_total = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

export const P_value = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const Button_remove_all = styled.button`
  width: 90%;
  border: none;
  height: 40px;
  border-radius: 8px;
  font-weight: bold;
  color: gray;
`;
