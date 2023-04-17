import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import { useState,useEffect } from 'react'


function TransactionWindow(props) {


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

  const totalIncome = () => {
    let totalIncome = 0;
    expenses.forEach((expense) =>{
        totalIncome = totalIncome + parseInt(expense.amount)
    })

    return totalIncome;
}

  return (
    <>
    <div className="main-expense-container">
      <div className="expense-left-section">
        <div className="total-expense-details">
          <h2>Total {props.form_title}: {totalIncome()}</h2>
        </div>
      <h1>{props.form_title}</h1>
      <div className='expense-title-amount'>
        <label htmlFor="title">Title:</label>
        <input type="text" 
                    value={title}
                    name={'title'} 
                    placeholder={props.title_type}
                    onChange={handleTitleChange} />
      </div>
      <div className='expense-title-amount'>
        <label htmlFor="amount">Amount:</label>
        <input value={amount}  
                    type="number" 
                    name={'amount'} 
                    placeholder={props.amount_type}
                    onChange={handleAmountChange} />
      </div>
      <div className={props.btn_class} onClick={handleAddExpense}>
      {props.add_type}
      </div>
      <Link href={props.nav_page}>
      <div className={props.btn_class}>
      {props.rev_page}
      </div>
      </Link>
      </div>
      {/*expenses.length > 0 && (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.title}: ${expense.amount}
            </li>
          ))}
        </ul>
          )*/}

    <div className="expense-right-section">
    {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul className='expense-list-array'>
          {expenses.map((expense, index) => (
            <li key={index}>
              <div className="expense-item-detail">{expense.title} - ${expense.amount}</div>
              <div className="delete-item" onClick={() => handleDeleteExpense(index)}>
               <FontAwesomeIcon
               icon={faTrash}
               width={50}
               />
              </div>
            </li>
          ))}
        </ul>
      )
      }
    </div>
    </div>
    </>
  )
}

export default TransactionWindow