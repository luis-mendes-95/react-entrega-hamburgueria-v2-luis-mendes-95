import * as main from "../../styles/main";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const FormLogin = () => {
  interface iLogin {
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const { login } = useContext(UserContext);

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

    if (result === 200) {
      toast.success("Login realizado.");

      setTimeout(function () {
        navigate("/homepage");
      }, 2000);
    } else {
      toast.error("Ops! Algo deu errado.");
    }
  };

  return (
    <main.Form_general onSubmit={handleSubmit(submit)} noValidate>
      <main.H2_login>Login</main.H2_login>
      <main.Label_general>Nome</main.Label_general>
      <main.Input_general
        placeholder="Digite aqui seu e-mail"
        type="email"
        {...register("email")}
      />
      {errors.email?.message && (
        <main.P_aria_label aria-label="error">
          {errors.email.message}
        </main.P_aria_label>
      )}
      <main.Label_general>Senha</main.Label_general>
      <main.Input_general
        placeholder="Digite aqui sua senha"
        type="password"
        {...register("password")}
        style={{
          width: "100%",
          height: "35px",
          border: "1pt solid gray",
          borderRadius: "4px",
        }}
      />
      {errors.password?.message && (
        <main.P_aria_label aria-label="error">
          {errors.password.message}
        </main.P_aria_label>
      )}
      <main.Button_submit type="submit">Logar</main.Button_submit>
      <main.Span_register>
        Crie sua conta para saborear muitas delícias e matar sua fome
      </main.Span_register>
      <main.Button_register
        onClick={() => {
          navigate("/register");
        }}
      >
        Cadastrar
      </main.Button_register>
    </main.Form_general>
  );
};

export default FormLogin;
