import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PrivateRoute from './components/PrivateRoute';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { AuthProvider } from './hooks/useAuthContext';

const App = () => {

  return (
    <AuthProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route element={<PrivateRoute />}>
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;