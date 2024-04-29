import DangerText from "../../text/DangerText";
import * as S from "./Input.Styles";

// eslint-disable-next-line react/prop-types
const TextInput = ({
  label,
  id,
  type,
  value,
  onChange,
  error,
  onBlur,
  ...restProps
}) => {
  return (
    <S.InputContainer>
      <S.TextLabelFor htmlFor={id}> {label} </S.TextLabelFor>
      <S.TextInput
        className="shadow-primary"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
      {error && <DangerText>{error}</DangerText>}
    </S.InputContainer>
  );
};

export default TextInput;
