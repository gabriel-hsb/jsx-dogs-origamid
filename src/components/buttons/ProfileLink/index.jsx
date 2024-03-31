import ProfileSvg from "../../../assets/images/icons/usuario.svg?react";

import styles from "./ProfileLink.module.scss";

const ProfileLink = () => {
  return (
    <div className={`${styles.profile} helvetica`}>
      <div>Login / Criar</div>
      <div>
        <ProfileSvg />
      </div>
    </div>
  );
};

export default ProfileLink;
