import DogLoginImg from "../../assets/images/photos/login.jpg";
import TextInput from "../../components/inputs/TextInput";
import DisplayTextStyled from "../../components/text/DisplayTextStyled";

import * as S from "./Login.Styles";

const Login = () => {
  return (
    <S.LoginContainer>
      <S.LoginImg>
        <img src={DogLoginImg} />
      </S.LoginImg>
      <S.LoginInfos>
        <DisplayTextStyled>Login</DisplayTextStyled>
        <TextInput  />
      </S.LoginInfos>
    </S.LoginContainer>
  );
};

export default Login;
