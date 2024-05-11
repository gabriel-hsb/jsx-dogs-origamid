import { useEffect } from "react";

import { useParams } from "react-router";

import { PHOTO_GET } from "../../scripts/apiBackend";
import useFetch from "../../scripts/hooks/useFetch";

import ImageSkeleton from "../../components/feed/ImageSkeleton";
import PhotoModalContentInfos from "../../components/feed/PhotoModalContentInfos";
import LoadingAnimatedSvg from "../../components/LoadingAnimatedSvg";

import * as S from "./Foto.Styles";
import DangerText from "../../components/text/DangerText";

const Foto = () => {
  const { data, error, isFetching, request } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <DangerText>Erro. Por favor tente novamente.</DangerText>;
  if (isFetching) return <LoadingAnimatedSvg />;

  return (
    <S.SinglePhotoContainer>
      {data && (
        <>
          <ImageSkeleton src={data.photo.src} />
          <PhotoModalContentInfos comments={data.comments} photo={data.photo} />
        </>
      )}
    </S.SinglePhotoContainer>
  );
};

export default Foto;
