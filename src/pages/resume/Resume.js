import React from "react";
import styled from "styled-components";
import resumeData from "data/resumeData.js";
import { Wrapper } from "components/shared/OuterContainer.js";
import BasicInfo from "pages/resume/BasicInfo";
import TechSkills from "pages/resume/TechSkills";
import Projects from "pages/resume/Projects";

const Category = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;
const Resume = () => (
  <Wrapper>
    <BasicInfo />
    <Category>TechnicalSkills</Category>
    <TechSkills data={resumeData.techSkill} />
    <Category>Projects</Category>
    <Projects data={resumeData.projects} />
    <Category>Experiences</Category>
    <Projects data={resumeData.experiences} />
    <Category>Education</Category>
    <Projects data={resumeData.education} />
  </Wrapper>
);

export default Resume;
