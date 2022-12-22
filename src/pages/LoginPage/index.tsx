import FormLogin from "../../components/FormLogin";
import LogoTitle from "../../components/LogoTitle";
import { ToastContainer } from "react-toastify";
import * as main from "../../styles/main"

const LoginPage = () => {
  return (
    <main.Div_background_login >
      <LogoTitle />
      <FormLogin />
      <ToastContainer />
    </main.Div_background_login>
  );
};

export default LoginPage;
