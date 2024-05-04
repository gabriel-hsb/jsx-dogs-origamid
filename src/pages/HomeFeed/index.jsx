import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import FeedPhotosGrid from "../../components/feed/FeedPhotosGrid";
import PhotoModal from "../../components/feed/PhotoModal";

import * as S from "./HomeFeed.Styles";

const HomeFeed = ({ userId, page, setKeepFetching }) => {
  const [photoModal, setPhotoModal] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  let location = useLocation();
  location = location.pathname.split("/");
  // location = location[location.length - 1];
  console.log(location[1]);

  // AQUI VAI CRIAR A FUNÇÃO DE SCROLL INFINITO

  useEffect(() => {
    let wait = false;
    function infiniteScroll(e) {
      // first, verify if user is close to the end of the page (70%)

      if (infinite) {
        // scroll relates to the scroller itself
        const scroll = window.scrollY;
        // height is always fixed
        const height = document.body.offsetHeight - window.innerHeight;

        // checks if user is getting close end of the page
        if (scroll > height * 0.7 && wait === false) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <S.HomeFeedContainer>
      {photoModal && (
        <PhotoModal photo={photoModal} setPhotoModal={setPhotoModal} />
      )}

      {pages.map((page) => {
        return (
          <FeedPhotosGrid
            key={page}
            setPhotoModal={setPhotoModal}
            userId={userId}
            page={page}
            setInfinite={setInfinite}
          />
        );
      })}

      {!infinite && <S.PostsEndText>Acabaram as postagens 😔</S.PostsEndText>}

      {/* TODO: "Você ainda não postou nenhuma foto" message on 'conta' when user hasn't posted any photos */}

      {/* {!infinite && location[1] === "conta" ? (
        <S.PostsEndText>Você ainda não postou nenhuma foto! 😔</S.PostsEndText>
      ) : (
        <S.PostsEndText>Acabaram as postagens 😔</S.PostsEndText>
      )} */}
    </S.HomeFeedContainer>
  );
};

export default HomeFeed;
