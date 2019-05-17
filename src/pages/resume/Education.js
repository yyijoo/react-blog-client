import React from "react";
import { DividedDiv } from "components/resume/DividedDiv.js";

const Education = ({ data }) => {
  const EducationContent = () => {
    return <div>test</div>;
  };
  return (
    <div>
      {data.contents.map(item => (
        <div>
          <DividedDiv
            leftCategory={{ name: item.title, term: item.term }}
            rightContent={<EducationContent />}
          />
        </div>
      ))}
    </div>
  );
};

export default Education;
