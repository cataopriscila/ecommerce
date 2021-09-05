import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const ToggleStock = ({onStock, isUnchecked}) => {
   return(<Checkbox
    label={<label>In stock only</label>}   
    toggle 
    onChange={onStock}
    isUnchecked={isUnchecked}
     />) 
}

export default ToggleStock;
