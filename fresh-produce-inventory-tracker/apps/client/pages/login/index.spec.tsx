import '@testing-library/jest-dom';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './index';

const server = setupServer(
  rest.post('/login', (req, res, ctx) => {
    return res(ctx.json({ token: 'mocked_user_token' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Login page test', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });

  test('handles login exception', () => {
    server.use(
      rest.post(
        'http://localhost:3333/api/authentication/signin',
        (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({
              statusCode: 500,
              message: 'Internal server error',
              error: 'Internal server error',
            })
          );
        }
      )
    );

    render(<Login />);

    userEvent.type(
      screen.getByRole('textbox', { name: 'Email' }),
      'Awelani0519@gmail.com'
    );
    userEvent.type(screen.getByRole('password'), 'super-secret');
    userEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    expect(screen.getByRole('error-alert')).toHaveTextContent(
      'Internal server  error'
    );
  });
});
