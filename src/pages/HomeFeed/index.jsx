import { useState } from "react";

import FeedPhotosGrid from "../../components/feed/FeedPhotosGrid";
import PhotoModal from "../../components/feed/PhotoModal";

import * as S from "./HomeFeed.Styles";

const HomeFeed = () => {
  const [photoModal, setPhotoModal] = useState(null);

  return (
    <S.HomeFeedContainer>
      {photoModal && (
        <PhotoModal photo={photoModal} setPhotoModal={setPhotoModal} />
      )}

      <FeedPhotosGrid setPhotoModal={setPhotoModal} />
    </S.HomeFeedContainer>
  );
};

export default HomeFeed;
