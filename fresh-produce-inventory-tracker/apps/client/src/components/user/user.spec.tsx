import { render } from '@testing-library/react';

import User from './user';

describe('User', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<User name={''} email={''} bio={''} visibility={''} />);
    expect(baseElement).toBeTruthy();
  });
});
