import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page'; // Make sure this path is correct

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    // Update this line to match text that's actually in your component
    expect(screen.getByText(/Satverse HomePage/i)).toBeInTheDocument();
    // You could also test for the paragraph text
    expect(screen.getByText(/This is just a initial page/i)).toBeInTheDocument();
  });
});