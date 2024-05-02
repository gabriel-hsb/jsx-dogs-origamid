import ViewsIcon from "../../../assets/images/icons/visualizacao.svg?react";

import ImageSkeleton from "../ImageSkeleton";

import * as S from "./FeedPhoto.Styles";

const FeedPhoto = ({ photo, setPhotoModal }) => {
  return (
    //FIXME: display span with views on hover
    //TODO: also display comment count along with acessos on hover  
    <S.FeedPhoto className="animeLeft" onClick={() => setPhotoModal(photo)}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <span>
        <ViewsIcon /> {photo.acessos}
      </span>
    </S.FeedPhoto>
  );
};

export default FeedPhoto;
