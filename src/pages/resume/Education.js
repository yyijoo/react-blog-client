import React from "react";
import { DividedDiv } from "components/resume/DividedDiv.js";
import List from "components/resume/List";

const Education = ({ data }) => {
  const EducationContent = () => {
    return <div>test</div>;
  };
  return (
    <div>
      {console.log("data", data)}
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
