import DisplayTextSquare from "../../../components/text/DisplayTextSquare";
import TextInput from "../../../components/form/Input";
import SimpleButton from "../../../components/form/SimpleButton";

import { PASSWORD_LOST } from "../../../scripts/apiBackend";
import useForm from "../../../scripts/hooks/useForm";
import useFetch from "../../../scripts/hooks/useFetch";

import * as S from "./LoginLostPassword.Styles";
import DangerText from "../../../components/text/DangerText";

const LoginLostPassword = () => {
  const login = useForm();
  const { isFetching, error, request, data } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: `${window.location.href.replace("perdeusenha", "resetarsenha")}`,
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <S.LoginLostPasswordContainer className="animeLeft">
      <DisplayTextSquare>Perdeu a senha?</DisplayTextSquare>
      {data ? (
        <S.Success>Email de recuperação enviado</S.Success>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <TextInput
            id={"email"}
            label={"Digite o nome de usuário ou e-mail"}
            type={"email"}
            required
            {...login}
          />
          <SimpleButton disabled={isFetching}>
            {isFetching ? "Recuperando..." : "Recuperar senha"}{" "}
          </SimpleButton>
          {error && <DangerText>{error}</DangerText>}
        </form>
      )}
    </S.LoginLostPasswordContainer>
  );
};

export default LoginLostPassword;
