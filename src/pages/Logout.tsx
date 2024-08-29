import { Button } from '@mui/material';
import { useAuth } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

  const handleLogout = () => {
    setToken(null);
    navigate('/');
  };

  return token ? <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button> : null;
};

export default Logout;