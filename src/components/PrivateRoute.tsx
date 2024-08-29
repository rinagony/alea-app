import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuthContext';

const PrivateRoute = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;