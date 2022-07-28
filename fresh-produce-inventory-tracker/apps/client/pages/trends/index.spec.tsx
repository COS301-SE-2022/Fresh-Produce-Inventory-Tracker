import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Trends from './index';
import 'whatwg-fetch';

describe('Trends', () => {
  it('should work', async () => {
      render(<Trends fruitDataMonday={[]} fruitDataTuesday={[]} fruitDataWednesday={[]} fruitDataThursday={[]} fruitDataFriday={[]} fruitDataSaturday={[]} fruitDataSunday={[]} FreshProduce={undefined} PoultryMeat={undefined} Pastries={undefined} lineData={undefined}/>);
  })
})