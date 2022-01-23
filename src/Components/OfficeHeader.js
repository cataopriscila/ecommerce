import React from "react";
import { Header, Icon } from "semantic-ui-react";

const OfficeHeader = () => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="pencil alternate" circular />
      <Header.Content>Office e-commerce</Header.Content>
    </Header>
  </div>
);

export default OfficeHeader;
