import { faCalendar, faCircleDot, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import { useState,useEffect } from 'react'
import ReactDatePicker from 'react-datepicker';


function TransactionWindow() {


  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date,setDate]=useState('');
  const [expenses, setExpenses] = useState([]);


  {/*const handleTitleChange = (e) => {
    if(!title){
      alert("Please enter a title!");
      return;
    }
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    if (parseFloat(amount) <= 0) {
      alert('Please enter a valid amount greater than zero!');
      return;
    }
    setAmount(e.target.value);
  };

  const handleDateChange=(e)=>{
    if(!date){
      alert("Please enter a date!");
      return;
    }
    setDate(e.target.value);
  }*/}

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission
    console.log(`Text: ${title}, Amount: ${amount}, Date: ${date}`);
    setTitle('');
    setAmount('');
    setDate('');
  };

  const handleAddExpense = () => {
    if(!title || !amount || !date){
      alert("Please enter all fields");
      return;
    }
    setExpenses([...expenses, { title, amount,date }]);
    setTitle('');
    setAmount('');
    setDate('');
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
      <h1>Expenses</h1>
      <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="text">Title</label>
      <input type="text" placeholder='Enter Title' required minLength={1} maxLength={20} id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
      <label htmlFor="amount">Amount</label>
      <input type="number" placeholder='Enter Amount' required id="amount" min={0} max={100} value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      <div>
      <label htmlFor="date">Date</label>
      <input type="date"  placeholder='Enter Date' required id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <button className='add-expense-btn' style={{margin:"0",width:"auto",borderRadius:"5px",padding:"1rem",fontSize:"1rem"}} type="submit" onClick={handleAddExpense}>
        Add Expense
      </button>
    </form>
      </div>
    <div className="expense-right-section">
    {expenses.length === 0 ? (
        <p>No expenses yet...</p>
      ) : (
        <ul className='expense-list-array'>
          {expenses.map((expense, index) => (
            <li key={index} className='expense-list-li'>
              <div className="expense-details">
                <div className="expense-title">
                <FontAwesomeIcon icon={faCircleDot} width={10}/>{expense.title}
                </div>
                <div className="other-details">
                  <div><b>$</b>{expense.amount}</div> <div><FontAwesomeIcon icon={faCalendar} width={15}/>{expense.date}</div>
                </div>
              </div>
              <div className="delete-item" onClick={() => handleDeleteExpense(index)}>
               <FontAwesomeIcon
               icon={faTrash}
               width={50}
               height={50}
               />
              </div>
            </li>
          ))}
        </ul>
      )
      }
      <div className="total-expense-details">
          <h2>Total Expenses: {totalIncome()}</h2>
        </div>
    </div>
    </div>
    </>
  )
}

export default TransactionWindow