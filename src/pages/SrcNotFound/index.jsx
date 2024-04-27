import DisplayTextSquare from "../../components/text/DisplayTextSquare";

import * as S from "./SrcNotFound.Styles";

const SrcNotFound = () => {
  return (
    <S.NotFoundContainer className="animeLeft">
      <DisplayTextSquare>Erro 404</DisplayTextSquare>
      <p>Página não encontrada</p>
    </S.NotFoundContainer>
  );
};

export default SrcNotFound;
