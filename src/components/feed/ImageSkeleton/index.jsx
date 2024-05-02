import { useState } from "react";

import * as S from "./ImageLazyLoading.Styles";

const ImageSkeleton = ({ ...restProps }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleImgLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
    console.log("loaded");
  }

  return (
    <S.LazyLoadingContainer>
      {skeleton && <S.Skeleton />}
      <img onLoad={handleImgLoad} {...restProps} />
    </S.LazyLoadingContainer>
  );
};

export default ImageSkeleton;
