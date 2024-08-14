import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import IncomeTracker from './components/IncomeTracker';

function App() {
  return (
    <Router>
      <div>
        <a href='/'>Yosan</a>
      </div>
      <div>
        <a href='/income'>Income</a>
      </div>
      <div>
        <a href='/expense'>Expenses</a>
      </div>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/income' element={<IncomeTracker />} />
        <Route path='/expense' element={<ExpenseTracker />} />
        {/* <Route path='/budget' element={<Budget />} /> */}
        {/* <Route path='/reports' element={<Reports />} /> */}
        {/* <Route path='/user' element={<User />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
