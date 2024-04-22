import * as S from "./Input.Styles";

// eslint-disable-next-line react/prop-types
const TextInput = ({ label, id, type, ...restProps }) => {
  return (
    <div>
      <S.TextLabelFor htmlFor={id}> {label} </S.TextLabelFor>
      <S.TextInput
        className="shadow-primary"
        id={id}
        type={type}
        {...restProps}
      />
    </div>
  );
};

export default TextInput;
