import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockAuthProvider } from './mockAuthProvider';

const TestProvider = ({ mockToken, children }: { children: ReactNode, mockToken?: string | null }) => {
  return (
  <MockAuthProvider mockToken={mockToken}>
    <Router>
      {children}
    </Router>
    </MockAuthProvider>
  );
};

export default TestProvider;