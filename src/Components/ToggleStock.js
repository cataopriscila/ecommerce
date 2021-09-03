import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const ToggleStock = ({onStock, restoreInitial}) => {
   return(<Checkbox
    label={<label>In stock only</label>}   
    toggle 
    onChange={onStock}
    onClick={restoreInitial}
     />) 
}

export default ToggleStock;
