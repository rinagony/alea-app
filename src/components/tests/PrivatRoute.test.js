import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { useAuth } from '../../hooks/useAuthContext';

jest.mock('../../hooks/useAuthContext');

describe('PrivateRoute', () => {
  it('renders the Outlet when logged in', () => {
    useAuth.mockReturnValue({ token: 'valid-token' });

    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute />}>
            <Route path="" element={<div data-testid="private-content">privat content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('private-content')).toBeInTheDocument();
  });

  it('redirects to login when logged out', () => {
    useAuth.mockReturnValue({ token: null });

    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute />}>
            <Route path="" element={<div data-testid="private-content">Private content</div>} />
          </Route>
          <Route path="/" element={<div data-testid="login-page">login Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
    expect(screen.queryByTestId('private-content')).not.toBeInTheDocument();
  });
});