import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import About from './index';
import 'whatwg-fetch';

describe('About', () => {
  it('should work', async () => {
      render(<About/>);
  })
})