import { ReactNode, useState } from 'react';
import { AuthProvider, useAuth } from '../hooks/useAuthContext';

interface MockAuthProviderProps {
  children: ReactNode;
  mockToken?: string | null;
}

export const MockAuthProvider = ({ children, mockToken = 'mocked-token' }: MockAuthProviderProps) => {
  return (
    <AuthProvider>
      <MockAuthWrapper token={mockToken}>{children}</MockAuthWrapper>
    </AuthProvider>
  );
};

const MockAuthWrapper = ({ token, children }: { token: string | null; children: ReactNode }) => {
  const { setToken } = useAuth();
  useState(() => {
    setToken(token);
  });

  return <>{children}</>;
};