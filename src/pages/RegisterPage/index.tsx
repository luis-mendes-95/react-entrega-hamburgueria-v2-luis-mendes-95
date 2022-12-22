import FormRegister from "../../components/FormRegister";
import { ToastContainer } from "react-toastify";
import * as main from "../../styles/main"
import LogoTitle from "../../components/LogoTitle";

const RegisterPage = () => {
  return (
    <main.Div_background_register>
      <LogoTitle/>
      <FormRegister />
      <ToastContainer />
    </main.Div_background_register>
  );
};

export default RegisterPage;
