import { render } from '@testing-library/react';

import Navigation from './index';

describe('Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigation Type={''} number={''} message={''} />);
    expect(baseElement).toBeTruthy();
  });
});
