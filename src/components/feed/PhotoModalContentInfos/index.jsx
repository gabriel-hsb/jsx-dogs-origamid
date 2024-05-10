import { useContext } from "react";

import { Link, useLocation } from "react-router-dom";

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.extend(RelativeTime);
dayjs.locale("pt-br");

import { PHOTO_DELETE } from "../../../scripts/apiBackend";
import { UserContext } from "../../../UserContext";

import useFetch from "../../../scripts/hooks/useFetch";

import ViewsIconBlack from "../../../assets/images/icons/visualizacao-black.svg?react";
import DisplayTextSquare from "../../text/DisplayTextSquare";
import PhotoComments from "../PhotoComments";

import * as S from "./PhotoModalContentInfos.Styles";

const PhotoModalContentInfos = ({ comments, photo }) => {
  const { request, isFetching } = useFetch();
  const { data: loggedUserData } = useContext(UserContext);

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

  const { pathname } = useLocation();
  const isAtFotoURL = pathname.includes("foto");

  return (
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
            <span>{dayjs(photo.date).toNow(true)}</span>
          </div>
          <span>
            <ViewsIconBlack /> {photo.acessos}
          </span>
        </S.Views>
        {isAtFotoURL ? (
          <DisplayTextSquare>{photo.title}</DisplayTextSquare>
        ) : (
          <Link to={`foto/${photo.id}`}>
            <DisplayTextSquare>{photo.title}</DisplayTextSquare>
          </Link>
        )}

        <S.DogDataContainer>
          <S.DogDataSpan>{photo.peso} kg</S.DogDataSpan>
          <S.DogDataSpan>
            {photo.idade == 1 ? "1 ano" : `${photo.idade} anos`}
          </S.DogDataSpan>
        </S.DogDataContainer>
      </div>
      <PhotoComments comments={comments} photo={photo} />
    </S.PhotoModalContentInfos>
  );
};

export default PhotoModalContentInfos;
