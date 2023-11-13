import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Step One')).toBeDefined();
    expect(getByText('See Your Changes')).toBeDefined();
    expect(getByText('Debug')).toBeDefined();
    expect(getByText('Learn More')).toBeDefined();
  });
});
