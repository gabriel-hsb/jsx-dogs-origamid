import * as S from "./DisplayTextRect.Styles";

// eslint-disable-next-line react/prop-types
const DisplayTextRect = ({ children }) => {
  return <S.StyledDisplay className="spectral">{children}</S.StyledDisplay>;
};

export default DisplayTextRect;
