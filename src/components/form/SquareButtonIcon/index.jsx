import * as S from "./SquareButtonIcon.Styles";

// eslint-disable-next-line react/prop-types
const SquareButtonIcon = ({ children }) => {
  return (
    <S.SquareButtonIcon className="shadow-secondary-color">{children}</S.SquareButtonIcon>
  );
};

export default SquareButtonIcon;
