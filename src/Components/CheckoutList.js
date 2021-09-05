import { Table } from "semantic-ui-react";
import CheckoutItems from "./CheckoutItems";

const CheckoutList = ({ products, total }) => {  
  
    return (
        <>        
             { products.length?
          ( 
            products        
          .map((list, i) => {          
            
            return (            
                <CheckoutItems
                key={i}                
                image={products[i].image}
                name={products[i].name}                
                price={products[i].price}                
                quantity={products[i].quantity}               
                total={total}
              />           
            )
          }) 
          ):
          (<Table.Row>
            <Table.Cell>
              <h3>No items added to cart!</h3>
            </Table.Cell>        
          </Table.Row>)
        }       
                   
      </>
    )
  };
  
  export default CheckoutList;
  