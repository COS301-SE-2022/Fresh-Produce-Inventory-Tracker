import { render } from '@testing-library/react';

import TaskTable from './task-table';

describe('TaskTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TaskTable />);
    expect(baseElement).toBeTruthy();
  });
});
