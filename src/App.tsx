import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BudgetPlanner from './components/BudgetPlanner';
import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import IncomeTracker from './components/IncomeTracker';
import NavTab from './components/NavTab';
import Reports from './components/Reports';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <NavTab />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/income' element={<IncomeTracker />} />
        <Route path='/expense' element={<ExpenseTracker />} />
        <Route path='/budget' element={<BudgetPlanner />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/user' element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
