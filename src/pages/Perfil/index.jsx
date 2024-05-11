import { useParams } from "react-router";

import DisplayTextSquare from "../../components/text/DisplayTextSquare";
import HomeFeed from "../../pages/HomeFeed";

import * as S from "./Perfil.Styles";

const Perfil = () => {
  const { user } = useParams();

  return (
    <>
      <S.ProfileContainer>
        <DisplayTextSquare>{user}</DisplayTextSquare>
      </S.ProfileContainer>
      <HomeFeed userId={user} />
    </>
  );
};

export default Perfil;
