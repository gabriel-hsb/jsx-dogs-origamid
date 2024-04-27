import * as S from "./SimpleButton.Styles";

// eslint-disable-next-line react/prop-types
const SimpleButton = ({ children, ...restProps }) => {
  return (
    <S.SimpleButton className="shadow-secondary" {...restProps}>{children}</S.SimpleButton>
  );
};

export default SimpleButton;
