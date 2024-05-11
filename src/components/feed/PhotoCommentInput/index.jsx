import { useState } from "react";

import useFetch from "../../../scripts/hooks/useFetch";
import { COMMENT_POST } from "../../../scripts/apiBackend";

import DangerText from "../../../components/text/DangerText";

import SendCommentSvg from "../../../assets/images/icons/enviar.svg?react";

import * as S from "./PhotoCommentInput.Styles";

const PhotoCommentInput = ({ photoId, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(photoId, { comment });
    const { response, json } = await request(url, options);
    console.log(response);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <S.CommentInputContainer>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          placeholder={"Comente aqui"}
          spellCheck
          className="shadow-primary"
          id="comment"
          name="comment"
          required
        />
        <button type="submit">
          <SendCommentSvg />
        </button>
      </form>
    </S.CommentInputContainer>
  );
};

export default PhotoCommentInput;
