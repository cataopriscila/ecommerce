import React, { useState, useEffect } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import CheckoutList from '../Components/CheckoutList';
import ThatsAllFolks from '../Components/ThatsAllFolks';

const Checkout = ({products}) => {
  const [total, setTotal] = useState('');
 

  useEffect(() => {
    setTotal(products.reduce((acc, item) => acc + item.price, 0))
  }, [products]);
 
    
    
    return (  
<>
<h2>Checkout</h2>
  <Table size='medium'
   className='Checkout'
   id='checkout'
   >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Items</Table.HeaderCell>
        <Table.HeaderCell>Products</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    <CheckoutList          
          products={products}                   
           />
    </Table.Body> 
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell  colSpan="12">
              <h5>TOTAL: $ {total}</h5>              
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="12">
              <ThatsAllFolks/>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>       
  </Table>
</>
)
} 

export default Checkout;
