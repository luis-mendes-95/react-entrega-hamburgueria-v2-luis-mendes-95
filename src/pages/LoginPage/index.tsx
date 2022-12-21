import FormLogin from "../../components/FormLogin";
import LogoTitle from "../../components/LogoTitle";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <LogoTitle />
      <FormLogin />
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
