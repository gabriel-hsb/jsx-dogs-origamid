import { useState } from "react";

import useFetch from "../../../scripts/hooks/useFetch";
import { COMMENT_POST } from "../../../scripts/apiBackend";

import DangerText from "../../../components/text/DangerText";

import SendCommentSvg from "../../../assets/images/icons/enviar.svg?react";

import * as S from "./PhotoCommentInput.Styles";

const PhotoCommentInput = ({ photoId, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    const token = window.localStorage.getItem("token");

    const { url, options } = COMMENT_POST({
      id: photoId,
      body: newComment,
      token: token,
    });
    const { response, json } = await request(url, options);
    if (response.ok) {
      console.log(json);
      console.log("deu certo");
      // setNewComment("");
      // setComments((comments) => [...comments, json]);
    }
  }

  return (
    <S.CommentInputContainer>
      <form onSubmit={handleSubmit}>
        {error ? (
          <DangerText>Erro. Tente novamente.</DangerText>
        ) : (
          <textarea
            value={newComment}
            onChange={({ target }) => setNewComment(target.value)}
            placeholder="Comente aqui"
            spellCheck
            className="shadow-primary"
            id="comment"
            name="comment"
            required
          />
        )}
        <button>
          <SendCommentSvg />
        </button>
      </form>
    </S.CommentInputContainer>
  );
};

export default PhotoCommentInput;
