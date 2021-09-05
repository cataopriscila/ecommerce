import { Table, Image, Checkbox, Label, Icon } from "semantic-ui-react";

const TableItems = ({
  image,
  name,
  category,
  price,
  stock,
  quantity,
  listID,
  onCheckboxCheck,
  addItem,
  removeItem,
  total
}) => {
  

  return (
    <>
      <Table.Row>
        <Table.Cell textAlign="center">
          <Checkbox
            onChange={onCheckboxCheck}
            id={listID}
            label={
              !stock ? (
                <Label basic color="red" pointing="left">
                  Out of Stock!
                </Label>
              ) : (
                ""
              )
            }
          />
        </Table.Cell>
        <Table.Cell>
          <Image centered rounded size="tiny" src={image} />
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{category}</Table.Cell>
        <Table.Cell>${price}</Table.Cell>
        <Table.Cell>{stock}</Table.Cell>
        <Table.Cell>
          <Icon
            size="large"
            name="caret square up outline"
            onClick={addItem}
            id={listID}
          />
          <div className="QuantityColumn">{quantity}</div>
          <Icon
            size="large"
            name="caret square down outline"
            onClick={removeItem}
            id={listID}
          />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default TableItems;
