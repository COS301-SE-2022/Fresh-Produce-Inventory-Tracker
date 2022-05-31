import { render } from '@testing-library/react';

import Trends from './index';

describe('Trends', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Trends />);
    expect(baseElement).toBeTruthy();
  });
});
