import ImageSkeleton from "../ImageSkeleton";
import PhotoModalContentInfos from "../PhotoModalContentInfos";

import * as S from "./PhotoModalContent.styles";

const PhotoModalContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <S.PhotoModalContentContainer className="scaleUp">
      <S.Photo>
        <ImageSkeleton src={photo.src} alt={photo.title} />
      </S.Photo>
      <PhotoModalContentInfos comments={comments} photo={photo} />
    </S.PhotoModalContentContainer>
  );
};

export default PhotoModalContent;
