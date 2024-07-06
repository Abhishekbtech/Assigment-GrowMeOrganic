import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import UserForm from './components/UserForm';
import DataTable from './components/DataTable';
import DepartmentList from './components/DepartmentList';
import { Container, Typography } from '@mui/material';

const FirstPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Information
      </Typography>
      <UserForm />
    </Container>
  );
};

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      navigate('/');
    }
  }, [history]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Data Table and Department List
      </Typography>
      <DataTable />
      <DepartmentList />
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/second" element={<SecondPage/>} />
        {/* <Route path='/data-table' element={<DataTable/>}/> */}
        {/* <redirect to="/" /> */}
      </Routes>
    </Router>
  );
};

export default App;
