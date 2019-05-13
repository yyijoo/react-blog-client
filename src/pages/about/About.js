import React from "react";
import { Wrapper } from "components/shared/OuterContainer";
import aboutData from "data/aboutData";
import styled from "styled-components";

const AboutMeDiv = styled.div`
  margin-right: 8rem;

  .value-title {
    margin: 1rem 0;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <AboutMeDiv>
        Javascript와 React를 사용하는 프론트엔드 개발자입니다. 하나의 기능을
        처음부터 끝까지 스스로 구현하는 완결성을 목표로 틈틈히 백엔드 작업도
        하고 있습니다. 4년간 파킹스퀘어와 카카오에서 사업기획자로 일하며
        스타트업 생태계의 실행력과 비즈니스 마인드 스택을 얻었습니다. 프로덕트가
        사용자에게 제공하는 ‘실질적 가치'를 고민하며 비즈니스 로직을 프로덕트로
        실현할 때 몰입합니다. 코드스테이츠라는 부트캠프에서 풀스택 엔지니어
        과정을 수료했으며 최우수 수료생으로 선정되었습니다.
        <div className="value-title">아래와 같은 가치를 추구합니다.</div>
        <ul>
          {aboutData.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </AboutMeDiv>
    </Wrapper>
  );
};

export default About;
