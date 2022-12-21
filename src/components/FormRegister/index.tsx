import * as main from "../../styles/main";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const FormRegister = () => {
  interface iRegister {
    email: string;
    password: string;
    name: string;
  }

  const navigate = useNavigate();

  const { register_user } = useContext(UserContext);

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
        <main.Div_title_and_button>
          <main.H2_title>Cadastro</main.H2_title>
          <main.Button_return
            onClick={() => {
              navigate("/");
            }}
          >
            Retornar para o login
          </main.Button_return>
        </main.Div_title_and_button>

        <main.Label_general
          style={{
            alignSelf: "flex-start",
            fontSize: "10pt",
            margin: "10px 0 0 0",
          }}
        >
          E-mail
        </main.Label_general>
        <main.Input_general
          placeholder="Digite aqui seu e-mail"
          type="text"
          {...register("email")}
          style={{
            width: "100%",
            height: "35px",
            border: "1pt solid gray",
            borderRadius: "4px",
          }}
        />
        {errors.email?.message && (
          <main.P_aria_label aria-label="error">
            {errors.email.message}
          </main.P_aria_label>
        )}
        <main.Label_general
          style={{
            alignSelf: "flex-start",
            fontSize: "10pt",
            margin: "10px 0 0 0",
          }}
        >
          Senha
        </main.Label_general>
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
        <main.Label_general
          style={{
            alignSelf: "flex-start",
            fontSize: "10pt",
            margin: "10px 0 0 0",
          }}
        >
          Nome
        </main.Label_general>
        <main.Input_general
          placeholder="Digite aqui seu nome"
          type="text"
          {...register("name")}
          style={{
            width: "100%",
            height: "35px",
            border: "1pt solid gray",
            borderRadius: "4px",
          }}
        />
        {errors.name?.message && (
          <main.P_aria_label aria-label="error">
            {errors.name.message}
          </main.P_aria_label>
        )}
        <main.Button_submit type="submit">Cadastrar</main.Button_submit>
      </main.Form_general>
      <ToastContainer />
    </>
  );
};

export default FormRegister;
