import { useState } from "react";

import * as S from "./PhotoCommentInput.Styles";

const PhotoCommentInput = ({ id }) => {
  const [newComment, setNewComment] = useState("");

  return (
    <S.CommentForm>
      <textarea
        value={newComment}
        onChange={({ target }) => setNewComment(target.value)}
        placeholder="Comente aqui"
        spellCheck
        className="shadow-primary"
      />
    </S.CommentForm>
  );
};

export default PhotoCommentInput;
