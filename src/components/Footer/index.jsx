import DogsLogoFooterSvg from "../../assets/images/icons/dogs-footer.svg?react";

import * as S from "./Footer.Styles";

const Footer = () => {
  return (
    <S.FooterContainer>
      <DogsLogoFooterSvg  />
      <p>Dogs. Alguns direitos reservados.</p>
    </S.FooterContainer>
  );
};

export default Footer;
