import { useEffect } from "react";

import { useParams } from "react-router";

import { PHOTO_GET } from "../../scripts/apiBackend";
import useFetch from "../../scripts/hooks/useFetch";

import ImageSkeleton from "../../components/feed/ImageSkeleton";
import PhotoModalContentInfos from "../../components/feed/PhotoModalContentInfos";
import LoadingAnimatedSvg from '../../components/LoadingAnimatedSvg'

import * as S from "./Foto.Styles";

const Foto = () => {
  const { data, error, isFetching, request } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request]);

  return (
    <S.SinglePhotoContainer>
      {data && (
        <>
          <ImageSkeleton src={data.photo.src} />
          <PhotoModalContentInfos comments={data.comments} photo={data.photo} />
        </>
      )}
      {isFetching && <LoadingAnimatedSvg/>}
    </S.SinglePhotoContainer>
  );
};

export default Foto;
