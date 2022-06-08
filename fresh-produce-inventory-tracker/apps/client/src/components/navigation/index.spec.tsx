import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './index';

const MockData = () => {
  return(
    <BrowserRouter>
      <Navigation/>
    </BrowserRouter>
  )
}

describe('Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MockData />);
    expect(baseElement).toBeTruthy();
  });
});
