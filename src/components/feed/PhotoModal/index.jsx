import { useEffect } from "react";

import { PHOTO_GET } from "../../../scripts/apiBackend";
import useFetch from "../../../scripts/hooks/useFetch";
import DangerText from "../../text/DangerText";
import PhotoModalContent from "../PhotoModalContent";


import * as S from "./PhotoModal.Styles";

const PhotoModal = ({ photo, setPhotoModal }) => {
  const { data, error, isFetching, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(e) {
    if (e.target == e.currentTarget) setPhotoModal(null);
  }

  return (
    <S.PhotoModalVh onClick={handleOutsideClick}>
      {error && <DangerText>{error}</DangerText>}
      {isFetching && <DangerText>Carregando...</DangerText>}
      {data && <PhotoModalContent data={data} />}
    </S.PhotoModalVh>
  );
};

export default PhotoModal;
