import { faBowlFood, faCalendar, faCarSide, faCartShopping, faCircle, faCircleDot, faIndianRupee, faMoneyBill, faNotesMedical, faPiggyBank, faSchool, faShirt, faTrash, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import { useState,useEffect } from 'react'
import ReactDatePicker from 'react-datepicker';


function TransactionWindow() {


  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date,setDate]=useState('');
  const [category,setCategory]=useState('');
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission
    console.log(`Text: ${title}, Amount: ${amount}, Date: ${date}`);
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  const handleAddExpense = () => {
    if(!title || !amount || !date){
      alert("Please enter all fields");
      return;
    }
    
    if(parseFloat(amount)<=0){
      alert("Please enter a non-negative number");
      return;
    }

    setExpenses([...expenses, { title, amount,date,category }]);
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
  };
  const handleDeleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  const deleteAllItems=()=>{
    const newExpenses = [...expenses];
    newExpenses.splice(0,newExpenses.length);
    setExpenses(newExpenses)
  }

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

const categoryIconExpense = (category) => {
  switch (category) {
      case 'education':
          return <FontAwesomeIcon icon={faSchool} height={50} width={50}/>;
      case 'groceries':
          return <FontAwesomeIcon icon={faCartShopping} height={50} width={50}/>;
      case 'health':
          return <FontAwesomeIcon icon={faNotesMedical} height={50} width={50}/>;
      case 'subscriptions':
          return <FontAwesomeIcon icon={faTv} height={50} width={50}/>;
      case 'food':
          return <FontAwesomeIcon icon={faBowlFood} height={50} width={50}/>;
      case 'clothing':
          return <FontAwesomeIcon icon={faShirt} height={50} width={50}/>;
      case 'travelling':
          return <FontAwesomeIcon icon={faCarSide} height={50} width={50}/>;
      case 'other':
          return <FontAwesomeIcon icon={faPiggyBank} height={50} width={50}/>;
      default:
          return ''
  }
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

      <div>
      <select required value={category} name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
      </select>
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
              <div className="expense-income-icon">
                {categoryIconExpense(expense.category)}
              </div>
              <div className="expense-content">
              <div className="expense-details">
                <div className="expense-title">
                <FontAwesomeIcon icon={faCircle} width={10} color='red'/>{expense.title}
                </div>
                <div className="other-details">
                  <div><FontAwesomeIcon icon={faIndianRupee} width={13}/>{expense.amount}</div> <div><FontAwesomeIcon icon={faCalendar} width={15}/>{expense.date}</div>
                </div>
              </div>
              <div className="delete-item" onClick={() => handleDeleteExpense(index)}>
               <FontAwesomeIcon
               icon={faTrash}
               width={50}
               height={50}
               />
              </div>
              </div>
            </li>
          ))}
        </ul>
      )
      }
      <div className="total-expense-details">
      <div className="delete-all-btn">
            <button onClick={deleteAllItems} style={{margin:"0",width:"auto",borderRadius:"5px",padding:"1rem",fontSize:"1rem"}}>Delete all</button>
      </div>
      <h2 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"}}>Total Expenses: <FontAwesomeIcon icon={faIndianRupee} width={13}/>{totalIncome()}</h2> 
      </div>
    </div>
    </div>
    </>
  )
}

export default TransactionWindow