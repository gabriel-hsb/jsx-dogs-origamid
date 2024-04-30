import { useState } from "react";
import useForm from "../../../scripts/hooks/useForm";
import useFetch from "../../../scripts/hooks/useFetch";

import TextInput from "../../../components/form/Input";
import SimpleButton from "../../../components/form/SimpleButton";

import * as S from "./ContaPostar.Styles";
import { PHOTO_POST } from "../../../scripts/apiBackend";

const ContaPostar = () => {
  const [dogPhoto, setDogPhoto] = useState(null);
  const dogName = useForm();
  const dogWeight = useForm("number");
  const dogAge = useForm("number");
  const { data, isFetching, error, request } = useFetch();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", dogPhoto.raw);
    formData.append("nome", dogName.value);
    formData.append("peso", dogWeight.value);
    formData.append("idade", dogAge.value);

    const token = window.localStorage.getItem("key");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);

    if (dogName.validate() && dogWeight.validate() && dogAge.validate()) {
      window.alert("oi");
    }
  }

  function handleImgChange({ target }) {
    setDogPhoto({
      raw: target.files[0],
    });
  }

  return (
    <S.PostForm onSubmit={handleSubmit} noValidate className="animeLeft">
      <TextInput
        id={"nome"}
        label={"Nome do Dog"}
        type={"text"}
        required
        {...dogName}
      />

      <TextInput
        id={"idade"}
        label={"Idade"}
        type={"numeric"}
        min={0}
        {...dogAge}
        required
      />

      <TextInput
        id={"peso"}
        label={"Peso"}
        type={"numeric"}
        min={0}
        required
        {...dogWeight}
      />

      <input id={"img"} type={"file"} required onChange={handleImgChange} />

      <SimpleButton> Postar </SimpleButton>
    </S.PostForm>
  );
};

export default ContaPostar;
