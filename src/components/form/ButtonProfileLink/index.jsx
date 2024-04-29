import ProfileSvg from "../../../assets/images/icons/usuario.svg?react";

import * as S from "./ButtonProfileLink";

const ProfileLink = ({ children }) => {
  return (
    <S.ButtonProfileLink className="helvetica">
      <div>{children}</div>
      <div>
        <ProfileSvg />
      </div>
    </S.ButtonProfileLink>
  );
};

export default ProfileLink;
