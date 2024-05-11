import DisplayTextSquare from "../../components/text/DisplayTextSquare";

import * as S from "./NotFound.Styles";

const NotFound = () => {
  return (
    <S.NotFoundContainer className="animeLeft">
      <DisplayTextSquare>Erro 404</DisplayTextSquare>
      <p>Página não encontrada</p>
    </S.NotFoundContainer>
  );
};

export default NotFound;
