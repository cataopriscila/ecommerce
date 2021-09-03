
import {  useState } from 'react';
import { Table, Image, Checkbox, Label } from 'semantic-ui-react';

const TableItems = ({image, name, category, price, stock}) => { 
  const [quantity, setQuantity ] = useState(0);
  const [isChecked, setIsChecked ] = useState(true); 
  

  const handleCheck = (e) => {
     setIsChecked(!isChecked);
     if(!stock){                  
       setQuantity(0);
     }
  }
  
 

  return (      
        <Table.Row> 
          <Table.Cell textAlign='center'>            
            <Checkbox 
            onChange={handleCheck}            
            onClick={(e)=> {isChecked? setQuantity(1): setQuantity(0)}}
            disabled={!stock}            
            label= {!stock?<Label basic color='red' pointing='left'>Out of Stock!</Label>:'' }          
            />
            
          </Table.Cell>       
          <Table.Cell><Image centered rounded size='tiny' src={image}/></Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{category}</Table.Cell>
          <Table.Cell>${price}</Table.Cell>
          <Table.Cell>{stock}</Table.Cell>
          <Table.Cell >{quantity}</Table.Cell>  
        </Table.Row>  
    
  )

} 

export default TableItems;
