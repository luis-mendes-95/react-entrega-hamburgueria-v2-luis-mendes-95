import React from "react";
import FormRegister from "../../components/FormRegister";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  return (
    <>
      <FormRegister />
      <ToastContainer />
    </>
  );
};

export default RegisterPage;
