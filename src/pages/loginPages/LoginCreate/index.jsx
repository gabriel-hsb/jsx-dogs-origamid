import DisplayTextSquare from "../../../components/text/DisplayTextSquare";
import SimpleButton from "../../../components/form/SimpleButton";
import TextUnderline from "../../../components/text/TextUnderline";
import DisplayTextRect from "../../../components/text/DisplayTextRect";
import TextInput from "../../../components/form/Input";

import * as S from "./LoginCreate.Styles";

const LoginCreate = () => {
  return (
    <S.LoginCreate className="anime-left">
      <DisplayTextSquare>Cadastre-se</DisplayTextSquare>
      <form>
        <TextInput
          id={"user"}
          label={"Nome de usuário"}
          type={"text"}
          required
        />
        <TextInput id={"mail"} label={"E-mail"} type={"email"} required />
        <TextInput id={"password"} label={"Senha"} type={"password"} required />
        <TextInput
          id={"password2"}
          label={"Confirmar senha"}
          type={"password"}
          required
        />
        <SimpleButton> Entrar </SimpleButton>
      </form>
    </S.LoginCreate>
  );
};

export default LoginCreate;
