import * as S from "./DisplayTextStyled.Styles";

// eslint-disable-next-line react/prop-types
const DisplayTextStyled = ({ children }) => {
  return <S.StyledDisplay className="spectral">{children}</S.StyledDisplay>;
};

export default DisplayTextStyled;
