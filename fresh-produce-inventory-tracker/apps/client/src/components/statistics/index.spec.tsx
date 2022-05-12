import { render } from '@testing-library/react';

import Statistics from './index';

describe('Statistics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Statistics />);
    expect(baseElement).toBeTruthy();
  });
});
