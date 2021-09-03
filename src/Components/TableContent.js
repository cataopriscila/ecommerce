import React from "react";
import { Table, TableBody } from "semantic-ui-react";

import TableHeader from "./TableHeader";
import TableList from "./TableList";

const TableContent = ({ products }) => {
 
  return (
    <> 
            
      <Table celled color="grey" key="grey" inverted>
        <TableHeader />
        <TableBody>
          <TableList 
          products={products}
           />
        </TableBody>
      </Table>
    </>
  );
};

export default TableContent;
