import TextInput from "../../../components/form/Input";
import SimpleButton from "../../../components/form/SimpleButton";

import * as S from "./ContaPostar.Styles";

const ContaPostar = () => {
  return (
    <S.PostForm className="animeLeft">
      <TextInput id={"nome"} label={"Nome do Dog"} type={"text"} required />

      <TextInput
        id={"idade"}
        label={"Idade"}
        type={"number"}
        min={0}
        required
      />

      <TextInput id={"peso"} label={"Peso"} type={"number"} min={0} required />

      <input id={"file"} type={"file"} required />

      <SimpleButton>Enviar</SimpleButton>
    </S.PostForm>
  );
};

export default ContaPostar;
