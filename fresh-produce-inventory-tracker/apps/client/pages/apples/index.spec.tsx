import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Trends from './index';
import 'whatwg-fetch';

describe('Apples', () => {
  it('should work', async () => {
      render(<Trends fruitDataMonday={undefined} fruitDataTuesday={undefined} fruitDataWednesday={undefined} fruitDataThursday={undefined} fruitDataFriday={undefined} fruitDataSaturday={undefined} fruitDataSunday={undefined}/>);
  })
})