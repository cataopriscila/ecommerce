import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const ToggleStock = ({onStock}) => {

  
   return(<Checkbox
    label={<label>In stock only</label>}   
    toggle 
    onChange={onStock}
    
     />) 
}

export default ToggleStock;
