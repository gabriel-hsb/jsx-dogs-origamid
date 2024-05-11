import ViewsIcon from "../../../assets/images/icons/visualizacao.svg?react";
import CommentsIcon from "../../../assets/images/icons/mensagem.svg?react";

import ImageSkeleton from "../ImageSkeleton";

import * as S from "./FeedPhoto.Styles";

const FeedPhoto = ({ photo, setPhotoModal }) => {
  return (
    <S.FeedPhoto className="animeLeft" onClick={() => setPhotoModal(photo)}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <span>
        <div>
          <ViewsIcon /> {photo.acessos}{" "}
        </div>
        <div>
          <CommentsIcon /> {photo.total_comments}{" "}
        </div>
      </span>
    </S.FeedPhoto>
  );
};

export default FeedPhoto;
