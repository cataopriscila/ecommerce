import React from "react";
import { Table } from "semantic-ui-react";
import TableItems from "./TableItems";

const TableList = ({ products }) => {
  return (
      <>    
      { products.length?
        (products        
        .map((list, i, arr) => {
          return (            
              <TableItems
              key={i}
              image={products[i].image}
              name={products[i].name}
              category={products[i].category}
              price={products[i].price}
              stock={products[i].stock}
            />                   
          
          )
        }) 
        ):
        (<Table.Row>
          <Table.Cell>
            <h3>Product not found!</h3>
          </Table.Cell>
        
        </Table.Row>)
      }
    </>
  )
};

export default TableList;
