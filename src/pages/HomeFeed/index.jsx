import DisplayTextSquare from "../../components/text/DisplayTextSquare";

import PhotoModal from "../../components/feed/PhotoModal";

import * as S from "./HomeFeed.Styles";
import FeedPhotosGrid from "../../components/feed/FeedPhotosGrid";

const HomeFeed = () => {
  return (
    <S.HomeFeedContainer>
      <FeedPhotosGrid />
    </S.HomeFeedContainer>
  );
};

export default HomeFeed;
