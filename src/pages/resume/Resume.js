import React from "react";
import styled from "styled-components";
import resumeData from "data/resumeData.js";

const Wrapper = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 2rem;

  #basic-info {
    font-size: 2rem;
    font-weight: bold;
  }

  .left-category {
    flex: 1
    font-size: 1.3rem;
    font-weight: bold;
  }

  .right-items {
    flex: 2
    .item-name {
      font-size: 1.1rem;
      font-weight: bold;
    }

    .item {
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
    }
  }

  .smaller-text {
    font-size: 0.8rem;
    font-weight: normal;
  }
`;

export default () => (
  <Wrapper>
    <Row>
      <div className="left-category" id="basic-info">
        이주연
      </div>
      <div className="right-items">
        010 - 2415 - 2026
        <br />
        yyijoo@gmail.com
        <br />
        github.com/yyijoo
      </div>
    </Row>
    <Row>
      <div className="left-category">{resumeData.techSkill.category}</div>
      <div className="right-items">
        {resumeData.techSkill.contents.map(content => (
          <div>
            <div className="item-name">{content.itemName}</div>
            <div className="item">
              {content.items.map(item => (
                <span>{item} </span>
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
              <div className="smaller-text" style={{ marginTop: "2px" }}>
                {content.desc}
              </div>
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
    </Row>
  </Wrapper>
);
