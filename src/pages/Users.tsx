import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Selector from '../components/Selector';
import UserTable from '../components/UserTable';
import axios from 'axios';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 5, label: '5' },
  { value: 10, label: '10' },
];

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(users, 'users')

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`);
      setUsers(response.data.data);
      setTotalUsers(response.data.total);
      setLoading(false);
    };
    fetchUsers();
  }, [page, perPage]);

  const handleOnChange = (event: React.ChangeEvent<{ value: string }>) => {
    setPerPage(parseInt(event.target.value as string));
    setPage(1);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" component="h1">
          User List
        </Typography>
      </Box>

      <Selector
        label="Users per page"
        value={perPage}
        onChange={handleOnChange}
        options={options}
        size="small"
      />

      <UserTable users={users} loading={loading} />

      <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
        <Button
          variant="text"
          onClick={() => setPage(page - 1)}
          disabled={page === 1 || users.length === 0}
        >
          <ArrowBackIosIcon />
        </Button>
        <Button
          variant="text"
          onClick={() => setPage(page + 1)}
          disabled={page * perPage >= totalUsers || users.length === 0}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default Users;