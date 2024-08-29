import { render, screen } from '@testing-library/react';
import Header from '../Header';
import TestProvider from '../../utils/testProvider';

describe('Header', () => {
  it('renders the header correctly if logged in', () => {
    render(
      <TestProvider mockToken="valid-token">
        <Header />
      </TestProvider>
    );

    expect(screen.getByTestId('header-root')).toBeInTheDocument();
    const appNameElement = screen.getByText(/ALEAPP/i);
    expect(appNameElement).toBeInTheDocument();

    const logoutElement = screen.getByText(/Logout/i);
    expect(logoutElement).toBeInTheDocument();
  });

  it('renders the header correctly if logged out', () => {
    render(
      <TestProvider mockToken={null}>
        <Header />
      </TestProvider>
    );

    expect(screen.getByTestId('header-root')).toBeInTheDocument();
    const appNameElement = screen.getByText(/ALEAPP/i);
    expect(appNameElement).toBeInTheDocument();

    expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument();
  });
});