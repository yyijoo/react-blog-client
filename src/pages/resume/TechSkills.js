import React from "react";
import { DividedDiv } from "components/shared/DividedDiv.js";
import ItemsWithComma from "components/resume/ItemsWithComma";

const TechSkills = ({ data }) => {
  return (
    <div>
      {data.contents.map(item => (
        <div>
          <DividedDiv
            leftCategory={{ name: item.itemName }}
            rightContent={<ItemsWithComma items={item.items} />}
          />
        </div>
      ))}
    </div>
  );
};

export default TechSkills;
