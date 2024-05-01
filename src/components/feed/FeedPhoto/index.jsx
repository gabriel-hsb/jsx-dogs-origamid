import ViewsIcon from "../../../assets/images/icons/visualizacao.svg?react";

import * as S from "./FeedPhoto.Styles";

const FeedPhoto = ({ photo }) => {
  return (
    <S.FeedPhoto className="animeLeft">
      <img src={photo.src} alt={photo.title} />
      <span>
        <ViewsIcon /> {photo.acessos}
      </span>
    </S.FeedPhoto>
  );
};

export default FeedPhoto;
