import React from "react";
import {
  Container,
  Content,
  Center,
  LogoOne,
  LogoTwo,
  SignUpLink,
  Description,
} from "./LoginPage.style";

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src="/images/cta-logo-one.svg" alt="logo-one" />
          <SignUpLink>지금 가입하기</SignUpLink>
          <Description>
            영화에 대한 프리미어 엑세스를 얻으십시오. <br />
            디즈니 플러스 가격은 다음주부터 1000원 인상됩니다.
          </Description>
          <LogoTwo src="images/cta-logo-two.png" alt="logo-two" />
        </Center>
      </Content>
    </Container>
  );
};

export default LoginPage;
