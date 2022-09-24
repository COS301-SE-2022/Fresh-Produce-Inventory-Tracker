import { render } from '@testing-library/react';

import User from './user';

describe('User', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<User data={{
      id: '1',
      Visibility: 'true',
      Name: 'Durandt',
      email: 'durandtu@gmail.com',
      Bio: "University Student",
      Surname: "Uys"
    }} />);
    expect(baseElement).toBeTruthy();
  });
});
