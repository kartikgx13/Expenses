import React from 'react'
import { useState,useEffect } from 'react'


function TransactionWindow() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { title, amount }]);
    setTitle('');
    setAmount('');
  };
  const handleDeleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  useEffect(()=>{
    const data=window.localStorage.getItem('expense_list')
    if (data!==null){
        setExpenses(JSON.parse(data))
    }
    },[])

  useEffect(()=>{
  window.localStorage.setItem('expense_list',JSON.stringify(expenses))
  },[expenses])


  return (
    <>
    <div>
      <h1>Expenses</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
      {/*expenses.length > 0 && (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.title}: ${expense.amount}
            </li>
          ))}
        </ul>
          )*/}

    {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.title} - ${expense.amount}</span>
              <button onClick={() => handleDeleteExpense(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

export default TransactionWindow