import React from "react";
import { DividedDiv } from "components/shared/DividedDiv.js";
import styled from "styled-components";
import githubIcon from "data/image/resume/github.png";
import mailIcon from "data/image/resume/mail.png";
import phoneIcon from "data/image/resume/phone.png";
import Icon from "components/resume/Icon";

const BasicInfoContent = () => {
  const Container = styled.div`
    .relative-div {
      position: relative;
    }
  `;
  return (
    <Container>
      <div className="relative-div">
        <Icon src={phoneIcon} />
        010 - 2415 - 2026
      </div>
      <div className="relative-div">
        <Icon src={mailIcon} />
        yyijoo@gmail.com
      </div>
      <div className="relative-div">
        <Icon src={githubIcon} />
        github.com/yyijoo
      </div>
    </Container>
  );
};

const BasicInfo = () => {
  return (
    <div>
      <DividedDiv
        basicInfo={true}
        leftCategory={{ name: "이주연" }}
        rightContent={<BasicInfoContent />}
      />
    </div>
  );
};

export default BasicInfo;
