import { render } from '@testing-library/react';

import InventoryItem from './inventory-item';

describe('InventoryItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InventoryItem />);
    expect(baseElement).toBeTruthy();
  });
});
