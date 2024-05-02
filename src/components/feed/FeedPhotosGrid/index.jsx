import { useEffect } from "react";
import { PHOTOS_GET } from "../../../scripts/apiBackend";
import useFetch from "../../../scripts/hooks/useFetch";

import FeedPhoto from "../FeedPhoto";

import DangerText from "../../text/DangerText";
import LoadingAnimatedSvg from "../../LoadingAnimatedSvg";

import * as S from "./FeedPhotosGrid.Styles";

const FeedPhotosGrid = ({ setPhotoModal }) => {
  const { data, isFetching, error, request } = useFetch();

  useEffect(() => {
    async function fetchAllPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json, response } = await request(url, options);
      console.log(data);
    }

    fetchAllPhotos();
  }, [request]);

  if (error) return <DangerText>{error}</DangerText>;
  if (isFetching) return <LoadingAnimatedSvg />;

  if (data)
    return (
      <S.FeedPhotosGridContainer>
        {data.map((photo) => (
          <FeedPhoto
            key={photo.id}
            photo={photo}
            setPhotoModal={setPhotoModal}
          />
        ))}
      </S.FeedPhotosGridContainer>
    );
  else return null;
};

export default FeedPhotosGrid;
