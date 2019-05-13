import React from "react";
import styled from "styled-components";
import resumeData from "data/resumeData.js";
import { Wrapper } from "components/shared/OuterContainer.js";
import { DividedDiv } from "components/shared/DividedDiv.js";
import BasicInfo from "pages/resume/BasicInfo";
import TechSkills from "pages/resume/TechSkills";
import Projects from "pages/resume/Projects";
import Education from "pages/resume/Education";

// const Row = styled.div`
//   display: flex;
//   margin-bottom: 2rem;

//   #basic-info {
//     font-size: 2rem;
//     font-weight: bold;
//   }

//   .left-category {
//     width: 150px;
//     font-size: 1.3rem;
//     font-weight: bold;
//   }

//   .right-items {
//     margin-left: 6rem;
//     .item-name {
//       font-size: 1.1rem;
//       font-weight: bold;
//     }

//     .item {
//       margin-bottom: 3rem;
//     }
//   }

//   .smaller-text {
//     font-size: 0.8rem;
//     font-weight: normal;
//     padding-top: -1rem;
//   }
// `;

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
    {/* <Projects data={resumeData.education} /> */}
    {/* <Row>
      <div className="left-category">{resumeData.techSkill.category}</div>
      <div className="right-items">
        {resumeData.techSkill.contents.map(content => (
          <div>
            <div className="item-name">{content.itemName}</div>
            <div className="item">
              {content.items.map((item, index) => (
                <span>
                  {item}
                  {content.items.length - 1 === index ? "" : ",  "}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Row>
    <Row>
      <div className="left-category">{resumeData.projects.category}</div>
      <div className="right-items">
        {resumeData.projects.contents.map(content => (
          <div>
            <div className="item-name project">
              {content.project}, [{content.role}]{" "}
              <span className="smaller-text">{content.term}</span>
              <div className="smaller-text">{content.desc}</div>
            </div>
            <div className="item project">
              {content.item.map(item => (
                <div>- {item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Row>
    <Row>
      <div className="left-category">{resumeData.experience.category}</div>
      <div className="right-items">
        <div className="item">
          {resumeData.experience.contents.map(content => (
            <div style={{ marginBottom: "25px" }}>
              <div style={{ marginBottom: "15px" }}>
                <u>
                  {content.experience}
                  <span className="smaller-text"> ({content.term})</span>
                </u>
              </div>
              <div>
                {content.item.map(item => (
                  <div>- {item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Row>
    <Row>
      <div className="left-category">{resumeData.education.category}</div>
      <div className="right-items">
        <div className="item">
          {resumeData.education.contents.map(content => (
            <div>
              - {content.education}
              <span className="smaller-text"> ({content.term})</span>
            </div>
          ))}
        </div>
      </div>
    </Row> */}
  </Wrapper>
);

export default Resume;
