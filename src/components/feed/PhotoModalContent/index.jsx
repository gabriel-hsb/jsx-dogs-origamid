import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../../UserContext";
import { PHOTO_DELETE } from "../../../scripts/apiBackend";
import useFetch from "../../../scripts/hooks/useFetch";

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.extend(RelativeTime);
dayjs.locale("pt-br");

import ImageSkeleton from "../ImageSkeleton";

import ViewsIconBlack from "../../../assets/images/icons/visualizacao-black.svg?react";
import DisplayTextSquare from "../../text/DisplayTextSquare";
import PhotoComments from "../PhotoComments";

import * as S from "./PhotoModalContent.styles";

const PhotoModalContent = ({ data }) => {
  const { photo, comments } = data;
  const { data: loggedUserData } = useContext(UserContext);

  const { request, isFetching } = useFetch();

  async function handlePhotoDelete() {
    const token = window.localStorage.getItem("token");

    const confirmedDeletePhoto = confirm(
      "Tem certeza que deseja apagar a foto?"
    );

    if (confirmedDeletePhoto) {
      const { url, options } = PHOTO_DELETE(photo.id, token);
      const { response } = await request(url, options);
      if (response.ok) location.reload();
    }
  }

  return (
    <S.PhotoModalContentContainer className="scaleUp">
      <S.Photo>
        <ImageSkeleton src={photo.src} alt={photo.title} />
      </S.Photo>
      <S.PhotoModalContentInfos>
        <div>
          <S.Views>
            <div>
              {/* checkes wheter photo's author was posted from user's account. if so, renders delete button. else, author's profile */}
              {loggedUserData && photo.author === loggedUserData.username ? (
                <S.PhotoDelete>
                  <button disabled={isFetching} onClick={handlePhotoDelete}>
                    {isFetching ? "Apagando..." : "Apagar"}
                  </button>
                </S.PhotoDelete>
              ) : (
                <Link to={`perfil/${photo.author}`}>@{photo.author}</Link>
              )}

              {/* checar se o autor da foto é o mesmo usuario logado */}

              <span>{dayjs(photo.date).toNow(true)}</span>
            </div>
            <span>
              <ViewsIconBlack /> {photo.acessos}
            </span>
          </S.Views>
          <Link to={`foto/${photo.id}`}>
            <DisplayTextSquare>{photo.title}</DisplayTextSquare>
          </Link>
          <S.DogDataContainer>
            <S.DogDataSpan>{photo.peso} kg</S.DogDataSpan>
            <S.DogDataSpan>
              {photo.idade == 1 ? "1 ano" : `${photo.idade} anos`}
            </S.DogDataSpan>
          </S.DogDataContainer>
        </div>
        <PhotoComments comments={comments} photo={photo} />
      </S.PhotoModalContentInfos>
    </S.PhotoModalContentContainer>
  );
};

export default PhotoModalContent;
