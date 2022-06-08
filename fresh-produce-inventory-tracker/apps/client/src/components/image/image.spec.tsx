import { render } from '@testing-library/react';

import Image from './image';

describe('Image', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line jsx-a11y/alt-text
    const { baseElement } = render(<Image />);
    expect(baseElement).toBeTruthy();
  });
});
