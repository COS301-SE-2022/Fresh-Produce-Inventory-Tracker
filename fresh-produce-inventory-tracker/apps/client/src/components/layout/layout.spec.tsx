import { render } from '@testing-library/react';

import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line react/no-children-prop
    const { baseElement } = render(<Layout children={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
