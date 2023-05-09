import { faBitcoinSign, faBuildingColumns, faCalendar, faCircle, faCircleDot, faDisplay, faIndianRupee, faMoneyBill, faMoneyBillTrendUp, faMoneyCheck, faPiggyBank, faTrash, faUser, faUserTag, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import { useState,useEffect } from 'react'
import ReactDatePicker from 'react-datepicker';


function TransactionIncome() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date,setDate]=useState('');
    const [category,setCategory]=useState('');
    const [income, setIncome] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // code to handle form submission
      console.log(`Text: ${title}, Amount: ${amount}, Date: ${date},Category:${category}`);
      setTitle('');
      setAmount('');
      setDate('');
      setCategory('');
    };
  
    const handleAddIncome = () => {
      if(!title || !amount || !date || !category){
        alert("Please enter all fields");
        return;
      }
      
      if(parseFloat(amount)<=0){
        alert("Please enter a non-negative number");
        return;
      }
  
      setIncome([...income, { title, amount,date,category }]);
      setTitle('');
      setAmount('');
      setDate('');
      setCategory('');
    };
    const handleDeleteIncome = (index) => {
      const newIncomes = [...income];
      newIncomes.splice(index, 1);
      setIncome(newIncomes);
    };

    const deleteAllItems=()=>{
      const newIncomes = [...income];
      newIncomes.splice(0,newIncomes.length);
      setIncome(newIncomes)
    }
  
    useEffect(()=>{
      const data=window.localStorage.getItem('income_list')
      if (data!==null){
          setIncome(JSON.parse(data))
      }
      },[])
  
    useEffect(()=>{
    window.localStorage.setItem('income_list',JSON.stringify(income))
    },[income])
  
    const totalIncome = () => {
      let totalIncome = 0;
      income.forEach((income) =>{
          totalIncome = totalIncome + parseInt(income.amount)
      })
  
      return totalIncome;
  }

  const categoryIconIncome = (category) =>{
    switch(category) {
        case 'salary':
            return <FontAwesomeIcon icon={faMoneyBill} height={30} width={30}/>;
        case 'freelancing':
            return <FontAwesomeIcon icon={faUserTie} height={30} width={30}/>;
        case 'investments':
            return <FontAwesomeIcon icon={faMoneyCheck} height={30} width={30}/>;
        case 'stocks':
            return <FontAwesomeIcon icon={faMoneyBillTrendUp} height={30} width={30}/>;
        case 'bitcoin':
            return <FontAwesomeIcon icon={faBitcoinSign} height={30} width={30}/>;
        case 'bank':
            return <FontAwesomeIcon icon={faBuildingColumns} height={30} width={30}/>;
        case 'other':
            return <FontAwesomeIcon icon={faPiggyBank} height={30} width={30}/>;
        default:
            return ''
    }
}

  return (
    <>
      <div className="main-expense-container">
      <div className="expense-left-section">
      <h1>Incomes</h1>
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
        <label htmlFor="category">Category</label>
      <select style={{backgroundColor:"transparent",cursor:"pointer"}} required value={category} name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank</option>  
                    <option value="other">Other</option>  
      </select>
      </div>

      <button className='add-income-btn' style={{margin:"0",width:"auto",borderRadius:"5px",padding:"0.85rem"}} type="submit" onClick={handleAddIncome}>
        Add Income
      </button>
    </form>
      </div>
    <div className="expense-right-section">
    {income.length === 0 ? (
        <p>No incomes yet...</p>
      ) : (
        <ul className='expense-list-array'>
          {income.map((income,index) => (
            <li key={index} className='expense-list-li'>
              <div className="expense-income-icon">
                 {categoryIconIncome(income.category)}
              </div>
              <div className="expense-content">
              <div className="expense-details">
                <div className="expense-title">
                <FontAwesomeIcon icon={faCircle} width={10} color='green'/>{income.title}
                </div>
                <div className="other-details">
                  <div><FontAwesomeIcon icon={faIndianRupee} width={13}/>{income.amount}</div> <div><FontAwesomeIcon icon={faCalendar} width={15}/>{income.date}</div>
                </div>
              </div>
              <div className="delete-item" onClick={() => handleDeleteIncome(index)}>
               <FontAwesomeIcon
               icon={faTrash}
               width={30}
               height={30}
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
            <button onClick={deleteAllItems} style={{margin:"0",width:"auto",borderRadius:"5px",padding:"0.85rem"}}>Delete all</button>
      </div>
      <h2 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"}}>Total Expenses: <FontAwesomeIcon icon={faIndianRupee} width={13}/>{totalIncome()}</h2> 
      </div>
    </div>
    </div>
    </>
  )
}

export default TransactionIncome