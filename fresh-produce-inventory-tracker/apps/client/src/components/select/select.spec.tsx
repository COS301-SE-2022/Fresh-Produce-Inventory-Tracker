import { render } from '@testing-library/react';

import Select from './index';

describe('Select', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Select SHOW_ITEMS={["test","test"]} />);
    expect(baseElement).toBeTruthy();
  });
});
