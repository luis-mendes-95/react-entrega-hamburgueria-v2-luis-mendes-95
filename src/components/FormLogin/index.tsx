import React from "react";
import * as main from "../../styles/main";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const FormLogin = () => {
  interface iLogin {
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("É necessário preencher seu nome cadastrado")
      .email("Insira um e-mail válido"),
    password: yup.string().required("A senha é obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data: iLogin) => {
    const result = await login(data);

    if (result===200) {
    console.log(result);
    toast.success("Login realizado.");

    setTimeout(function () {
      navigate("/homepage");
    }, 2000);

    } else {
    toast.error("Ops! Algo deu errado.")
    }
  };

  return (
    <main.Form_general onSubmit={handleSubmit(submit)} noValidate>
      <h2>Login</h2>
      <label>Nome</label>
      <input
        placeholder="Digite aqui seu e-mail"
        type="email"
        {...register("email")}
      />
      {errors.email?.message && (
        <p aria-label="error">{errors.email.message}</p>
      )}
      <label>Senha</label>
      <input
        placeholder="Digite aqui sua senha"
        type="password"
        {...register("password")}
      />
      {errors.password?.message && (
        <p aria-label="error">{errors.password.message}</p>
      )}
      <button type="submit">Logar</button>
      <span style={{ fontSize: "10px" }}>
        Crie sua conta para saborear muitas delícias e matar sua fome
      </span>
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        Cadastrar
      </button>
    </main.Form_general>
  );
};

export default FormLogin;
