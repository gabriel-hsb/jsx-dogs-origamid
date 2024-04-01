import * as S from "./SimpleButton.Styles";

// eslint-disable-next-line react/prop-types
const SimpleButton = ({ children }) => {
  return (
    <S.SimpleButton className="shadow-secondary">{children}</S.SimpleButton>
  );
};

export default SimpleButton;
