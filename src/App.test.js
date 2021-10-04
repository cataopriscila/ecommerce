import { render } from '@testing-library/react';
import App from './App';

test('renders application', () => {
  render(<App />);  
  expect(<App/>).toBeInTheDocument();
});
