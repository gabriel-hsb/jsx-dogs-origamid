import * as S from "./DisplayTextStyled.Styles";

// eslint-disable-next-line react/prop-types
const TextInput = ({id, placeholder, ...props }) => {
  return (
  
  <S.TextInput placeholder={placeholder} type="text" {...props} />
  );
};

export default TextInput;
