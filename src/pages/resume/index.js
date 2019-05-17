import React from "react";
import styled from "styled-components";
import resumeData from "data/resumeData.js";
import { Wrapper } from "components/shared/OuterContainer.js";
import BasicInfo from "pages/resume/BasicInfo";
import TechSkills from "pages/resume/TechSkills";
import ProExpEduContainer from "pages/resume/ProExpEduContainer";

const Category = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
const Resume = () => (
  <Wrapper>
    <BasicInfo />
    <Category>Technical Skills</Category>
    <TechSkills data={resumeData.techSkill} />
    <Category>Projects</Category>
    <ProExpEduContainer data={resumeData.projects} />
    <Category>Experiences</Category>
    <ProExpEduContainer data={resumeData.experiences} />
    <Category>Education</Category>
    <ProExpEduContainer data={resumeData.education} />
  </Wrapper>
);

export default Resume;
