import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.extend(RelativeTime);
dayjs.locale("pt-br");

import { UserContext } from "../../../UserContext";

import * as S from "./PhotoComments.Styles";
import PhotoCommentInput from "../PhotoCommentInput";

const PhotoComments = (props) => {
  const { isLogged } = useContext(UserContext);
  const [comments, setComments] = useState(() => props.comments);

  console.log(props);

  return (
    <S.CommentList>
      {comments.map((comment) => {
        return (
          <S.CommentContainer key={comment.comment_ID}>
            <S.Comment>
              <Link to={`perfil/${comment.comment_author}`}>
                <S.Author> {comment.comment_author} </S.Author>
              </Link>
              <S.Date>{dayjs(comment.comment_date).toNow(true)}</S.Date>
            </S.Comment>
            <p> {comment.comment_content} </p>
          </S.CommentContainer>
        );
      })}
      {isLogged && (
        <PhotoCommentInput id={props.photo.id} setComments={setComments} />
      )}
    </S.CommentList>
  );
};

export default PhotoComments;
