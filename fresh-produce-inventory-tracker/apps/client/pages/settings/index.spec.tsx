import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Settings from './index';
import 'whatwg-fetch';

describe('Settings', () => {
  it('should work', async () => {
      render(<Settings/>);
  })
})