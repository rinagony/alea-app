import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextInterface {
  token: string | null;
  setToken: (token: string | null) => void;
}
const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('error ocured in AuthCOntext');
  }
  return context;
};