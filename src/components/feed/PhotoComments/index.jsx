import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.extend(RelativeTime);
dayjs.locale("pt-br");

import useMedia from "../../../scripts/hooks/useMedia";

import { UserContext } from "../../../UserContext";

import * as S from "./PhotoComments.Styles";
import PhotoCommentInput from "../PhotoCommentInput";
import TextUnderline from "../../text/TextUnderline";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { isLogged } = useContext(UserContext);

  return (
    <S.CommentList>
      <S.CommentContainer>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <S.Comment>
                <Link to={`/perfil/${comment.comment_author}`}>
                  <S.Author> {comment.comment_author} </S.Author>
                </Link>
                <S.Date>{dayjs(comment.comment_date).toNow(true)}</S.Date>
              </S.Comment>
              <p> {comment.comment_content} </p>
            </li>
          );
        })}
      </S.CommentContainer>
      {isLogged ? (
        <PhotoCommentInput photoId={props.photo.id} setComments={setComments} />
      ) : (
        <S.LoginToComment>
          <Link to={"/login"}>
            <TextUnderline>Faça Login</TextUnderline>
          </Link>{" "}
          ou{" "}
          <Link to={"/login/criar"}>
            <TextUnderline>Cadastre-se</TextUnderline>
          </Link>{" "}
          para comentar
        </S.LoginToComment>
      )}
    </S.CommentList>
  );
};

export default PhotoComments;
