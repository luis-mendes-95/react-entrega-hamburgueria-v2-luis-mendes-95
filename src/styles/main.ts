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
`;
