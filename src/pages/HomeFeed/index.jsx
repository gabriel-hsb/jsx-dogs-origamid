import { useState } from "react";

import FeedPhotosGrid from "../../components/feed/FeedPhotosGrid";
import PhotoModal from "../../components/feed/PhotoModal";

import * as S from "./HomeFeed.Styles";

const HomeFeed = ({ userId, page, setKeepFetching }) => {
  const [photoModal, setPhotoModal] = useState(null);

  return (
    <S.HomeFeedContainer>
      {photoModal && (
        <PhotoModal photo={photoModal} setPhotoModal={setPhotoModal} />
      )}

      <FeedPhotosGrid
        setPhotoModal={setPhotoModal}
        userId={userId}
        page={page}
        setKeepFetching={setKeepFetching}
      />
    </S.HomeFeedContainer>
  );
};

export default HomeFeed;
