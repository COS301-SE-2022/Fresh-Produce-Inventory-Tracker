import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Trends from './index';
import 'whatwg-fetch';

describe('Trends', () => {
  it('should work', async () => {
      render(<Trends FreshProduce={undefined} PoultryMeat={undefined} Pastries={undefined} FreshProduceLine={undefined} PoultryMeatLine={undefined} PastriesLine={undefined}/>);
  })
})