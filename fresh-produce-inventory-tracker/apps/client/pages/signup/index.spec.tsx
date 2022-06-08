import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Signup from './index';
import 'whatwg-fetch';

describe('Trends', () => {
  it('should work', async () => {
      render(<Signup/>);
  })
})