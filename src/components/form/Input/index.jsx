import DangerText from "../../text/DangerText";
import * as S from "./Input.Styles";

const TextInput = ({
  label,
  id,
  type,
  value,
  onChange,
  error,
  onBlur,
  name,
  ...restProps
}) => {
  return (
    <S.InputContainer>
      <S.TextLabelFor htmlFor={id}> {label} </S.TextLabelFor>
      <S.TextInput
        className="shadow-primary"
        id={id}
        name={id}
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
