import { render } from '@testing-library/react';

import Navigation from './index';

describe('UrgentNotification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigation />);
    expect(baseElement).toBeTruthy();
  });
});
