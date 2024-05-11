import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import FeedPhotosGrid from "../../components/feed/FeedPhotosGrid";
import PhotoModal from "../../components/feed/PhotoModal";

import * as S from "./HomeFeed.Styles";
import TextUnderline from "../../components/text/TextUnderline";

const HomeFeed = ({ userId }) => {
  const [photoModal, setPhotoModal] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    let wait = false;
    function infiniteScroll(e) {
      // first, verify if user is close to the end of the page (70%)

      if (infinite) {
        // scroll relates to the scroller itself
        const scroll = window.scrollY;
        // height is always fixed
        const height = document.body.offsetHeight - window.innerHeight;

        // checks if user is getting close to the end of the page
        if (scroll > height * 0.75 && wait === false) {
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
      {/* TODO: "Você ainda não postou nenhuma foto" message on 'conta' when user hasn't posted any photos */}
      {/* {infinite === false && (
        <S.PostsEndText>
          {pathname.includes("conta") ? (
            <span>
              Você ainda não postou nenhuma foto.
              {
                <Link to="/conta/postar">
                  {" "}
                  <TextUnderline>Postar Foto</TextUnderline>
                </Link>
              }
            </span>
          ) : (
            "Acabaram as postagens"
          )}
        </S.PostsEndText>
      )} */}

      {!infinite && <S.PostsEndText>Acabaram as fotos</S.PostsEndText>}
    </S.HomeFeedContainer>
  );
};

export default HomeFeed;
