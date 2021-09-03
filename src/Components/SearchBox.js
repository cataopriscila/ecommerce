
import { Input } from 'semantic-ui-react'

const SearchBox = ({onInputChange }) => {
   
    return(
            <Input
                size="large" 
                placeholder='Enter product name'
                onChange={onInputChange} />        
        )
} 

export default SearchBox;

