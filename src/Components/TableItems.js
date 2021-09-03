
import { Table, Image } from 'semantic-ui-react';


const TableItems = ({image, name, category, price, stock}) => { 


  return (      
        <Table.Row>        
          <Table.Cell><Image centered rounded size='tiny' src={image}/></Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{category}</Table.Cell>
          <Table.Cell>${price}</Table.Cell>
          <Table.Cell>{stock}</Table.Cell>
        </Table.Row>   
    
  )

} 

export default TableItems;
