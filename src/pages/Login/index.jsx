import DogLoginImg from "../../assets/images/photos/login.jpg";
import DisplayTextSquare from "../../components/text/DisplayTextSquare";

import TextInput from "../../components/form/Input";

import * as S from "./Login.Styles";
import SimpleButton from "../../components/form/SimpleButton";
import TextUnderline from "../../components/text/TextUnderline";
import DisplayTextRect from "../../components/text/DisplayTextRect";

const Login = () => {
  return (
    <S.LoginContainer>
      <S.LoginImg>
        <img src={DogLoginImg} />
      </S.LoginImg>
      <S.LoginInfos className="animeLeft">
        <DisplayTextSquare>Login</DisplayTextSquare>
        <form>
          <TextInput
            id={"user"}
            label={"Nome de usuário"}
            type={"text"}
            required
          />
          <TextInput
            id={"password"}
            label={"Senha"}
            type={"password"}
            required
          />
          <SimpleButton> Entrar </SimpleButton>
        </form>
        <TextUnderline>Esqueceu a senha?</TextUnderline>
        <DisplayTextRect>teste</DisplayTextRect>
      </S.LoginInfos>
    </S.LoginContainer>
  );
};

export default Login;
