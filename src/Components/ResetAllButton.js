import React from "react";
import { Button } from "semantic-ui-react";

const ResetAllButton = ({ restoreProducts }) => {
  return (
    <div>
      <Button color="grey" size="big" onClick={restoreProducts}>
        Reset All
      </Button>
    </div>
  );
};

export default ResetAllButton;