import { render } from '@testing-library/react';

import UserModal from './user-modal';

describe('UserModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserModal />);
    expect(baseElement).toBeTruthy();
  });
});
