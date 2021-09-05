import { Table, Image } from "semantic-ui-react";

const CheckoutItems = ({
  image,
  name,  
  price,  
  quantity,  
  
}) => {
  

  return (
    <>
      <Table.Row>
        <Table.Cell><Image rounded size="tiny" src={image} /></Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{price}</Table.Cell>
        <Table.Cell>{quantity}</Table.Cell>
      </Table.Row>
    </>
  );
};

export default CheckoutItems;