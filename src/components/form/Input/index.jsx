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

      {/* TODO: add styled component to input error message */}
      {error && <p style={{ color: "red" }}> {error} </p>}
    </S.InputContainer>
  );
};

export default TextInput;
