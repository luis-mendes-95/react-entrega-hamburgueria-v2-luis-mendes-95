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

const FormRegister = () => {
  interface iRegister {
    email: string;
    password: string;
    name: string;
  }

  const navigate = useNavigate();

  const { register_user } = useContext(AuthContext);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("O e-mail é obrigatório!")
      .email("Insira um e-mail válido!"),
    password: yup
      .string()
      .required("A senha é obrigatória!")
      .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
      .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial"
      )
      .min(8, "É necessário pelo menos 8 caracteres"),
    name: yup.string().required("É necessário preencher seu nome cadastrado"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data: iRegister) => {
    const result = await register_user(data);

    if (result === 201) {
      toast.success("Cadastro realizado.");
      setTimeout(function () {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Ops! Algo deu errado.");
    }
  };

  return (
    <>
      <main.Form_general onSubmit={handleSubmit(submit)} noValidate>
        <div style={{ display: "flex" }}>
          <h2>Cadastro</h2>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Retornar para o login
          </button>
        </div>

        <label>E-mail</label>
        <input
          placeholder="Digite aqui seu e-mail"
          type="text"
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
        <label>Nome</label>
        <input
          placeholder="Digite aqui seu nome"
          type="text"
          {...register("name")}
        />
        {errors.name?.message && (
          <p aria-label="error">{errors.name.message}</p>
        )}
        <button type="submit">Cadastrar</button>
      </main.Form_general>
      <ToastContainer />
    </>
  );
};

export default FormRegister;
