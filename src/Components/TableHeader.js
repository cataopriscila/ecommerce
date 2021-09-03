import React from 'react';
import { Table } from "semantic-ui-react";

const TableHeader = () => {
    return (
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Product</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Stock</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
}

export default TableHeader;
