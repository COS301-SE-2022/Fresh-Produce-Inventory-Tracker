import { render } from '@testing-library/react';

import Task from './task';

describe('Task', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Task />);
    expect(baseElement).toBeTruthy();
  });
});
