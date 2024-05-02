import { Link } from "react-router-dom";

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.extend(RelativeTime);
dayjs.locale("pt-br");

import ViewsIconBlack from "../../../assets/images/icons/visualizacao-black.svg?react";
import DisplayTextSquare from "../../text/DisplayTextSquare";
import PhotoComments from "../PhotoComments";

import * as S from "./PhotoModalContent.styles";

const PhotoModalContent = ({ data }) => {
  const { photo, comments } = data;

  console.log(photo);

  return (
    <S.PhotoModalContentContainer className="scaleUp">
      <S.Photo>
        <img src={photo.src} />
      </S.Photo>
      <S.PhotoModalContentInfos>
        <div>
          <S.Views>
            <div>
              <Link to={`perfil/${photo.author}`}>@{photo.author}</Link>
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
