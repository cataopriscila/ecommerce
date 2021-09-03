import React from 'react';
import { Button } from 'semantic-ui-react';

const ShowAllButton = ({restoreInitial}) => {
    return (
        <div>        
            <Button color='grey'  size='big' onClick={restoreInitial}>Show All</Button>
        </div>
    );
}

export default ShowAllButton;
