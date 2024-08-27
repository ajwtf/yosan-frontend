import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile') || '').token
    }`;
  }

  return req;
});

export const fetchIncomes = () => API.get('/income');
export const addIncome = (incomeData: any) => API.post('/income', incomeData);

export const fetchExpenses = () => API.get('/expense');
export const addExpense = (expenseData: any) =>
  API.post('/expense', expenseData);

export const fetchBudget = () => API.get('/budget');
export const setBudget = (budgetData: any) => API.post('/budget', budgetData);

// export const fetchUser = () => API.get('/user/profile');
// export const setUser = (userData: any) => API.post('/user/profile', userData);
