import React from 'react';
import { Button } from 'semantic-ui-react';

const ResetAllButton = ({restoreInitial}) => {
    return (
        <div>        
            <Button color='grey'  size='big' onClick={restoreInitial}>Reset All</Button>
        </div>
    );
}

export default ResetAllButton;
