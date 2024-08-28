import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BudgetTracker from './components/BudgetTracker';
import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import IncomeTracker from './components/IncomeTracker';
import Nav from './components/Nav';
import Reports from './components/Reports';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      {/* <NavTab /> */}

      <Nav />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/income' element={<IncomeTracker />} />
        <Route path='/expense' element={<ExpenseTracker />} />
        <Route path='/budget' element={<BudgetTracker />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/user' element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
