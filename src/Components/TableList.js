import React from "react";
import { Table } from "semantic-ui-react";
import TableItems from "./TableItems";

  

const TableList = ({ products, addItem, removeItem, onCheckboxCheck, total }) => {  
  
  return (
      <>        
           { products.length?
        ( 
          products        
        .map((list, i) => {          
          
          return (            
              <TableItems
              key={i}
              listID={i}
              image={products[i].image}
              name={products[i].name}
              category={products[i].category}
              price={products[i].price}
              stock={products[i].stock}
              quantity={products[i].quantity}              
              addItem={addItem}
              removeItem={removeItem}
              onCheckboxCheck={onCheckboxCheck}
              total={total}
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
