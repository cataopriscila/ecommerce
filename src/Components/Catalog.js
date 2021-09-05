
import React from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import TableList from "./TableList";

const Catalog = ({ products, onSubmit, addItem, removeItem, onCheckboxCheck, total}) => {
  
  
  return (
    <>
      <h2>Shop Cart</h2>
      <Table celled color="grey" key="grey" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Stock</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          <TableList          
          products={products}          
          addItem={addItem}
          removeItem={removeItem}
          onCheckboxCheck={onCheckboxCheck}          
          total={total} />
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="12">
              <Button
                floated="right"
                icon
                labelPosition="right"
                secondary
                size="large"
                onClick={onSubmit}
                href="#checkout"                
              >
                <Icon name="cart" /> Go to cart
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>               
      </Table>
    </>
  );
};

export default Catalog;
