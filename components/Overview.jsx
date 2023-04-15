import React, { use } from 'react'
import { useState } from 'react'

function Overview() {
    const [visible,setVisible]=useState(false);
    const [amount,setAmount]=useState();
    const [title,setTitle]=useState();
    
    const togglevisibility = () =>{
        setVisible(!visible)
    }

    const addTransaction=()=>{
      console.log({amount,title});
    }

  return (
    <>
    <div className="main-overview-container">
    <h1>Expense Tracker</h1>
    <div className="expense-heading">
        <div className="balance-container">
          <h1>Balance: 3000$</h1>
        </div>
        <button className="add-cancel-button" onClick={togglevisibility}>
          {visible ? "CANCEL" : "ADD"}
        </button>
    </div>
    {visible && <div className="transaction-window" onClick={togglevisibility}>
            <label htmlFor="expensename">Title</label>
            <input type="text" placeholder='Enter title' value={title || ""} onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="expenseamount">Amount</label>
            <input type="number" name="amount" id="amount" placeholder='Enter amount' value={amount || ""} onChange={(e)=>setAmount(e.target.value)}/>                    
            <button onClick={()=>{togglevisibility(); addTransaction();}}>Add Transaction</button>
    </div>}
    <div className="expense-amount-window">
        <h1>Total Expenses: 10000$</h1>
    </div>
    </div>
    </>
  )
}

export default Overview