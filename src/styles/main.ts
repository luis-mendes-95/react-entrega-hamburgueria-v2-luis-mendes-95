import styled from "styled-components";

export const Form_general = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 4px black;
  width: 95%;
  margin: 5px;

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const H2_login = styled.h2`
  align-self: flex-start;
  font-size: 12pt;
`;

export const Label_general = styled.label`
  align-self: flex-start;
  font-size: 10pt;
  margin: 10px 0 0 0;
`;

export const Input_general = styled.input`
  width: 100%;
  height: 35px;
  border: 1pt solid gray;
  border-radius: 4px;
`;

export const P_aria_label = styled.p`
  font-size: 8pt;
  color: red;
`;

export const Button_submit = styled.button`
  width: 100%;
  height: 40px;
  background-color: green;
  border: none;
  color: white;
  border-radius: 8px;
  margin: 10px 0 0 0;
  cursor: pointer;
`;

export const Button_submit_search = styled.button`
  height: 35px;
  background-color: green;
  border: none;
  color: white;
  border-radius: 8px;
  margin-left: 3px;
  padding: 2px;
  cursor: pointer;
`;

export const Span_register = styled.span`
  font-size: 10px;
  text-align: center;
  color: gray;
  margin: 5px 0 0 0;
`;

export const Button_register = styled.button`
  width: 100%;
  height: 40px;
  background-color: gray;
  border: none;
  color: white;
  border-radius: 8px;
  margin: 10px 0 0 0;
  cursor: pointer;
`;

export const Div_title_and_button = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const H2_title = styled.h2`
  font-size: 12pt;
`;

export const Button_return = styled.button`
  border: none;
  background-color: white;
  font-size: 8pt;
  cursor: pointer;
`;

export const Div_home_background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header_home = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  background-color: lightgray;
  width: 100vw;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

export const Form_search = styled.form`
  margin-top: 10px;

  @media (min-width: 768px) {
    position: absolute;
    top: 25px;
  }
`;

export const Input_search = styled.input`
  width: 75%;
  height: 35px;
  border: 1pt solid gray;
  border-radius: 4px;
`;

export const Section_products = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ul_products = styled.ul`
  width: 95vw;
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  overflow: scroll;
  padding: 0 0 15px 0;

  @media (min-width: 768px) {
    width: 80vw;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Li_product = styled.li`
  background-color: white;
  padding: 5px;
  border: 1pt solid green;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 150px;
    height: 250px;
  }
`;

export const Img_product = styled.img`
  width: 100%;
`;

export const H2_product_name = styled.h2`
  width: 150px;
  font-size: 12pt;
  margin-bottom: 10px;
`;

export const P_category = styled.p`
  font-size: 8pt;
  margin-bottom: 10px;
  color: gray;
`;

export const Button_add_to_cart = styled.button`
  width: 50%;
  height: 40px;
  background-color: green;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

export const Div_background_login = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button_search = styled.button`
  border: none;
  background-color: lightgray;
  font-weight: bold;
  cursor: pointer;
`;

export const Button_cart = styled.button`
  border: none;
  background-color: lightgray;
  font-weight: bold;
  cursor: pointer;
`;

export const Button_logout = styled.button`
  border: none;
  background-color: lightgray;
  font-weight: bold;
  font-size: 14pt;
  cursor: pointer;
`;

export const Div_background_register = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
