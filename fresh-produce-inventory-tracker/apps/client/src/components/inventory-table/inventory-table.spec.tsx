import { render } from '@testing-library/react';

import InventoryTable from './inventory-table';

describe('InventoryTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InventoryTable />);
    expect(baseElement).toBeTruthy();
  });
});
