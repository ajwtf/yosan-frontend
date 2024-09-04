import './App.css';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { Button, Page } from '@shopify/polaris';

import BudgetTracker from './components/BudgetTracker';
import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import IncomeTracker from './components/IncomeTracker';
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';
import Reports from './components/Reports';
import UserProfile from './components/UserProfile';
import { RootState } from './context';
import { loadUserFromStorage } from './context/authSlice';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    /* if (isAuthenticated) {
      dispatch(fetchIncomes());
      dispatch(fetchExpenses());
    } */
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <Router>
      <Page>
        <Button variant='primary' url='/'>
          Yosan
        </Button>
      </Page>

      {isAuthenticated && <Nav />}

      <Routes>
        <Route
          path='/'
          element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route
          path='/register'
          element={isAuthenticated ? <Navigate to='/' /> : <Register />}
        />
        <Route
          path='/login'
          element={isAuthenticated ? <Navigate to='/' /> : <Login />}
        />

        {/* <Route path='/' element={<Landing />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/income' element={<IncomeTracker />} />
        <Route path='/expense' element={<ExpenseTracker />} />
        <Route path='/budget' element={<BudgetTracker />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
