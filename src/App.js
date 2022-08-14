import { useState } from "react";
import AddExpense from "./components/NewExpense/AddExpense";
import Expense from './components/Expense/Expense';

function App() {

  const dummy_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 10, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addHandler = (data) => {

      setExpenses((prevExpenses) => {
       return [data, ...prevExpenses];
      });
    
  };

  return (
    <div>
      <AddExpense onSubmitExpense={addHandler} />
      <Expense data={expenses} />
    </div>
  );
}

export default App;
