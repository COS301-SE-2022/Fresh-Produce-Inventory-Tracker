import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Inventory from './index';
import 'whatwg-fetch';

describe('Inventory', () => {
  it('should work', async () => {
      render(<Inventory trendData={undefined} />);
  })
})