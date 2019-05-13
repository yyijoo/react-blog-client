import React from "react";
import { DividedDiv } from "components/shared/DividedDiv.js";

const BasicInfoContent = () => {
  return (
    <div>
      010 - 2415 - 2026
      <br />
      yyijoo@gmail.com
      <br />
      github.com/yyijoo
    </div>
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
