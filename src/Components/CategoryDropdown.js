import React from "react";
import { Button, Dropdown } from "semantic-ui-react";

const CategoryDropdown = ({ handleCategory, restoreProducts }) => {
  const options = [
    { key: "paper", text: "Paper", value: "paper" },
    { key: "tools", text: "Tools", value: "tools" },
  ];

  return (
    <Button.Group color="grey">
      <Button>Filter by Category</Button>
      <Dropdown
        className="button icon"
        floating
        options={options}
        onChange={handleCategory}
        onClick={restoreProducts}
        trigger={<></>}
      />
    </Button.Group>
  );
};

export default CategoryDropdown;
