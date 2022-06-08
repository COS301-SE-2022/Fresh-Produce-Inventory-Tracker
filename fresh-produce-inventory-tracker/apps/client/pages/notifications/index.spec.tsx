import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './index';
import 'whatwg-fetch';

describe('Notifications', () => {
  it('should work', async () => {
      render(<Notifications notifications={[]}/>);
  })
})