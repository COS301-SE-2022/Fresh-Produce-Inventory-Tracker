import { render } from '@testing-library/react';

import Check from './check';

describe('Check', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Check data={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
