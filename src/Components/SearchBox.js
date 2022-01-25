import { Input } from "semantic-ui-react";

const SearchBox = ({ onInputChange, inputField }) => {
  return (
    <Input
      size="large"
      placeholder="Enter product name"
      onChange={onInputChange}
      value={inputField}
    />
  );
};

export default SearchBox;