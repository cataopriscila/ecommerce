import React from "react";
import { Table } from "semantic-ui-react";
import CartItems from "./CartItems";  

const CartList = ({ products, addItem, removeItem, onCheckboxCheck, total }) => {    
  return (
      <>        
           { products.length?
        ( 
          products        
        .map((item , i) => {          
          
          return (            
              <CartItems
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

export default CartList;
