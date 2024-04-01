import * as S from "./DisplayTextSquare.Styles";

// eslint-disable-next-line react/prop-types
const DisplayTextSquare = ({ children }) => {
  return <S.StyledDisplay className="spectral">{children}</S.StyledDisplay>;
};

export default DisplayTextSquare;
