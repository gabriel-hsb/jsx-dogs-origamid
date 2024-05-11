import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../scripts/hooks/useForm";
import useFetch from "../../../scripts/hooks/useFetch";
import { PHOTO_POST } from "../../../scripts/apiBackend";

import TextInput from "../../../components/form/Input";
import SimpleButton from "../../../components/form/SimpleButton";
import DangerText from "../../../components/text/DangerText";

import * as S from "./ContaPostar.Styles";

const ContaPostar = () => {
  const [dogPhoto, setDogPhoto] = useState(null);
  const dogName = useForm();
  const dogWeight = useForm("number");
  const dogAge = useForm("number");
  const { data, isFetching, error, request } = useFetch();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", dogPhoto.raw);
    formData.append("nome", dogName.value);
    formData.append("peso", dogWeight.value);
    formData.append("idade", dogAge.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);

    if (dogName.validate() && dogWeight.validate() && dogAge.validate()) {
      request(url, options);
    }
  }

  function handleImgChange({ target }) {
    setDogPhoto({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  useEffect(() => {
    // redirects user to page /conta when photo is posted
    data && navigate("/conta");
  }, [data]);

  return (
    <S.PostSection>
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
          label={"Idade em anos"}
          type={"number"}
          min={0}
          {...dogAge}
          required
        />

        <TextInput
          id={"peso"}
          label={"Peso em kg"}
          type={"number"}
          min={0}
          required
          {...dogWeight}
        />

        <input
          id={"img"}
          type={"file"}
          required
          onChange={handleImgChange}
          accept="image/png, image/gif, image/jpeg"
        />

        <SimpleButton disabled={isFetching}>
          {isFetching ? "Postando..." : "Postar"}
        </SimpleButton>
        {error && <DangerText>{error}</DangerText>}
      </S.PostForm>
      <S.PhotoPreview>
        {dogPhoto !== null && (
          <div style={{ backgroundImage: `url('${dogPhoto.preview}')` }} />
        )}
      </S.PhotoPreview>
    </S.PostSection>
  );
};

export default ContaPostar;
