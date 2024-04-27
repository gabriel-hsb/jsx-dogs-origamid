import * as S from "./SquareButtonIcon.Styles";

// eslint-disable-next-line react/prop-types
const SquareButtonIcon = ({ children, ...restProps }) => {
  return (
    <S.SquareButtonIcon className="shadow-secondary-color" {...restProps}>
      {children}
    </S.SquareButtonIcon>
  );
};

export default SquareButtonIcon;
