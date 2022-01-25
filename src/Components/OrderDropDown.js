import React from "react";
import { Button, Dropdown } from "semantic-ui-react";

const OrderDropdown = ({ handleOrder}) => {
  const options = [
    { key: "name", text: "Name", value: "name" },
    { key: "category", text: "Category", value: "category" },
    { key: "price", text: "Price", value: "price" },
    { key: "stock", text: "Stock", value: "stock" },
  ];

  return (
    <Button.Group color="grey">
      <Button>Order by</Button>
      <Dropdown
        className="button icon"
        floating
        options={options}
        onChange={handleOrder}
        trigger={<></>}
      />
    </Button.Group>
  );
};

export default OrderDropdown;
