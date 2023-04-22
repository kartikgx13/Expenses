import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react';

function dashboard() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(()=>{
    const expense_list=window.localStorage.getItem('expense_list')
    if (expense_list!==null){
        setExpenses(JSON.parse(expense_list))
    }
    },[])
  
  useEffect(()=>{
    const income_list=window.localStorage.getItem('income_list')
    if (income_list!==null){
        setIncome(JSON.parse(income_list))
    }
    },[])

    const totalIncome = () => {
      let totalIncome = 0;
      income.forEach((income) =>{
          totalIncome = totalIncome + parseInt(income.amount)
      })
  
      return totalIncome;
  }

  const totalExpense = () => {
    let totalExpense = 0;
    expenses.forEach((expenses) =>{
        totalExpense = totalExpense + parseInt(expenses.amount)
    })

    return totalExpense;
}

  const averageIncome=()=>{
    let totalIncome = 0;
      income.forEach((income) =>{
          totalIncome = totalIncome + parseInt(income.amount)
      })

      const avgincome=totalIncome / income.length;
    
      return avgincome
  }

  const averageExpense=()=>{
    let totalExpense = 0;
    expenses.forEach((expenses) =>{
        totalExpense = totalExpense + parseInt(expenses.amount)
    })

    const avgexpense=totalExpense / expenses.length;

    return avgexpense
  }

  const maxIncome=()=>{
    let temp=[]
    
    income.map((income,index)=>(
      temp.push(income.amount)
    ))

    if (temp.length===0){
     return 0;
    }
    else{
      return Math.max(...temp)
    }
    
  }

  const maxExpense=()=>{
    let temp=[]
    
    expenses.map((expenses,index)=>(
      temp.push(expenses.amount)
    ))

    if (temp.length===0){
     return 0;
    }
    else{
      return Math.max(...temp)
    }
    
  }

  const showHistoryExpenses=()=>{
    const history=expenses.slice(-2);

    if (history.length===0){
       return <div>No recent Transactions</div>
    }
    else{
      return console.log(history)
    }
  }

  const showHistoryIncome=()=>{
    const history=income.slice(-2);

    if (history.length===0){
       return <div>No recent Transactions</div>
    }
    else{
      return console.log(history)
    }
  }

  
  return (
    <>
    <section className="main-dashboard-section">
    <Navbar/>
    </section>
    </>
  )
}

export default dashboard