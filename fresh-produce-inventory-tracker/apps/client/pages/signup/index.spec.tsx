import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Signup from './index';
import 'whatwg-fetch';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import Login from '../login';

describe('Trends', () => {
  it('should work', async () => {
    render(<Signup />);
  });
});

describe('Login page test', () => {
  const server = setupServer(
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

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });

  it('should toggle password view', async () => {
    render(<Login />);
    const checkBox = screen.getByRole('checkbox');
    await userEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });

  test('handles login exception', async () => {
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

    render(<Signup />);

    await userEvent.type(
      screen.getByRole('textbox', { name: /email/i }),
      'Awelani0519@gmail.com'
    );
    userEvent.type(
      screen.getByRole('textbox', { name: /password/i }),
      'super-secret'
    );

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue(
      'Awelani0519@gmail.com'
    );
    expect(screen.getByRole('textbox', { name: /password/i })).toHaveValue(
      'super-secret'
    );
    expect(screen.getByRole('error-alert')).toHaveTextContent(
      'Internal server  error'
    );
  });
});
