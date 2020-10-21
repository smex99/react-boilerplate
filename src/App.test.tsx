import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders react boilerplate title', () => {
//   const { getByText } = render(<App />);
//   const title = getByText(/React Boilerplate/i);
//   expect(title).toBeInTheDocument();
// });

it('renders react boilerplate title', () => {
  const { getByText } = render(<App />);
  expect(getByText('React Boilerplate')).toBeInTheDocument();
});