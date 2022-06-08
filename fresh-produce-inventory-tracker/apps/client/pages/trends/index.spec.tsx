import '@testing-library/jest-dom';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Trends from './index';
import 'whatwg-fetch';

describe('Trends', () => {
  it('should work', async () => {
      render(<Trends fruitDataMonday={undefined} fruitDataTuesday={undefined} fruitDataWednesday={undefined} fruitDataThursday={undefined} fruitDataFriday={undefined} fruitDataSaturday={undefined} fruitDataSunday={undefined}/>);
  })
})