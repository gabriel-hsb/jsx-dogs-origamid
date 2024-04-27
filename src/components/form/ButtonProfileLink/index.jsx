import ProfileSvg from "../../../assets/images/icons/usuario.svg?react";

import styles from "./ButtonProfileLink.module.scss";

const ProfileLink = ({ children }) => {
  return (
    <div className={`${styles.profile} helvetica`}>
      <div>{children}</div>
      <div>
        <ProfileSvg />
      </div>
    </div>
  );
};

export default ProfileLink;
