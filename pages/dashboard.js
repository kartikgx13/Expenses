import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react';
import BarChartDemo from '../components/BarGraph';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign, faBowlFood, faBuildingColumns, faCalendar, faCarSide, faCartShopping, faCircle, faCircleDot, faIndianRupee, faMoneyBill, faMoneyBillTrendUp, faMoneyCheck, faNotesMedical, faPiggyBank, faSchool, faShirt, faTrash, faTv, faUserTie } from '@fortawesome/free-solid-svg-icons';


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

    return history
  }

  const showHistoryIncome=()=>{
    const history=income.slice(-2);

    return history
  }

  const graphExpense=()=>{
    const totalamountbycategory=expenses.reduce((acc,{category,amount})=>{
      if(!acc[category]){
        acc[category]=0
      }
      acc[category] += parseInt(amount);
      return acc;
    },{});

    return totalamountbycategory;
  }

  const graphIncome=()=>{
    const totalamountbycategory=income.reduce((acc,{category,amount})=>{
      if(!acc[category]){
        acc[category]=0
      }
      acc[category] += parseInt(amount);
      return acc;
    },{});

    return totalamountbycategory;
  }

  const mappingLabelsIncome=()=>{
    const keys = Object.keys(graphIncome());
    const arrKeys = Object.values(keys);
    console.log(typeof(arrKeys));
    return arrKeys;
  }

  const mappingDataIncome=()=>{
    const data = Object.values(graphIncome());
    const arrData = Object.values(data);
    console.log(typeof(arrData))
    return arrData;
    
  }

 const mappingLabelsExpense=()=>{
    const keys = Object.keys(graphExpense());
    const arrKeys = Object.values(keys);
    console.log(typeof(arrKeys));
    return arrKeys;
  }

  const mappingDataExpense=()=>{
    const data = Object.values(graphExpense());
    const arrData = Object.values(data);
    console.log(typeof(arrData))
    return arrData;
    
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

  const categoryIconIncome = (category) =>{
    switch(category) {
        case 'salary':
            return <FontAwesomeIcon icon={faMoneyBill} height={50} width={50}/>;
        case 'freelancing':
            return <FontAwesomeIcon icon={faUserTie} height={50} width={50}/>;
        case 'investments':
            return <FontAwesomeIcon icon={faMoneyCheck} height={50} width={50}/>;
        case 'stocks':
            return <FontAwesomeIcon icon={faMoneyBillTrendUp} height={50} width={50}/>;
        case 'bitcoin':
            return <FontAwesomeIcon icon={faBitcoinSign} height={50} width={50}/>;
        case 'bank':
            return <FontAwesomeIcon icon={faBuildingColumns} height={50} width={50}/>;
        case 'other':
            return <FontAwesomeIcon icon={faPiggyBank} height={50} width={50}/>;
        default:
            return ''
    }
}

{/*<BarChartDemo labels={mappingLabels()} heading="Total Expense" data={mappingData()}/>*/}
  return (
    <>
    <section className="main-dashboard-section">
    <Navbar/>
    <div className="main-dashboard-container">
    <div className="dashboard-main-content">
      <div className="dashboard-left-section">
      <div className="dashboard-heading">
      <h1>Dashboard</h1>
       </div>
        <div className="net-income">
          <div className="net-income-left">
          <h3>Available Balance</h3>
          {totalIncome()-totalExpense()<=0 ? (
            <h1 style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.5rem",color:"red"}}><FontAwesomeIcon icon={faIndianRupee} width={16}/>{totalIncome()-totalExpense()}</h1>
          ):(
            <h1 style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.5rem",color:"green"}}><FontAwesomeIcon icon={faIndianRupee} width={16}/>{totalIncome()-totalExpense()}</h1>
          )}
          </div>
          <div className="net-income-right">
            <Image
            src="/images/wallet.png"
            alt="wallet"
            height={50}
            width={50}
            />
          </div>
        </div>
        <div className="total-content">
          <div className="total-db-expense-income">
            <Image
            src="/images/down.png"
            alt='increase'
            height={50}
            width={50}
            />
            <div className="db-expense-income-details">
             <h3 style={{opacity:"0.6"}}>Expenses</h3>
             <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"}}><FontAwesomeIcon icon={faIndianRupee} width={13}/>{totalExpense()}</h3>
            </div>
          </div>
          <div className="total-db-expense-income">
          <Image
            src="/images/increase.png"
            alt='increase'
            height={60}
            width={60}
            />
            <div className="db-expense-income-details">
             <h3 style={{opacity:"0.6"}}>Income</h3>
             <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"}}><FontAwesomeIcon icon={faIndianRupee} width={13}/>{totalIncome()}</h3>
            </div>
          </div>
        </div>
        <div className="recent-history">
         <div className="recent-heading">
          <h3>Latest Spendings</h3>
          <h3 style={{opacity:"0.6",cursor:"pointer"}}>View All</h3>
         </div>
         <div className="seperator"></div>
         <div className="history-list-container">
         {showHistoryExpenses().length===0 ? (
          <p>No spendings yet</p>
         ):(
          <ul className="history-list">
            {showHistoryExpenses().reverse().map((item,index)=>(
              <li key={index} className="history-item-li">
                <div className="cat-icon-history">
                  {categoryIconExpense(item.category)}
                </div>
                <div className="history-details">
                  <div className="title-date-details">
                    <div style={{fontWeight:"bold"}}>{item.title}</div>
                    <div style={{opacity:"0.7"}}>{item.date}</div>
                  </div>
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem",color:"red"}} className="history-amount">
                  -<FontAwesomeIcon icon={faIndianRupee} width={13}/>{item.amount}
                  </div>
                </div>
              </li>
            ))}
          </ul>
         )}
            </div>
        </div>
        <div className="recent-history">
         <div className="recent-heading">
          <h3>Latest Earnings</h3>
          <h3 style={{opacity:"0.6",cursor:"pointer"}}>View All</h3>
         </div>
         <div className="seperator"></div>
         <div className="history-list-container">
         {showHistoryIncome().length===0 ? (
          <p>No earnings yet</p>
         ):(
          <ul className="history-list">
            {showHistoryIncome().reverse().map((item,index)=>(
              <li key={index} className="history-item-li">
                <div className="cat-icon-history">
                  {categoryIconIncome(item.category)}
                </div>
                <div className="history-details">
                  <div className="title-date-details">
                    <div style={{fontWeight:"bold"}}>{item.title}</div>
                    <div style={{opacity:"0.7"}}>{item.date}</div>
                  </div>
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem",color:"green"}} className="history-amount">
                  +<FontAwesomeIcon icon={faIndianRupee} width={13}/>{item.amount}
                  </div>
                </div>
              </li>
            ))}
          </ul>
         )}
            </div>
        </div>
      </div>
      <div className="dashboard-right-section">
        <div className="expense-graph-container">
         <div className="graph-heading">
         <h3>Expense Statistics</h3>
         <h3 style={{opacity:"0.6"}}>Category-wise</h3>
         </div>
         <div className="seperator"></div>
         <div className="main-graph-container">
          {expenses.length===0 ? (
            <p>No Data to display</p>
          ):(
            <BarChartDemo color="red" bgcolor="rgba(255,0,0,0.4)"  labels={mappingLabelsExpense()} heading="Total Expense" data={mappingDataExpense()}/>
          )}
         </div>
        </div>
        <div className="expense-graph-container">
         <div className="graph-heading">
         <h3>Income Statistics</h3>
         <h3 style={{opacity:"0.6"}}>Category-wise</h3>
         </div>
         <div className="seperator"></div>
         <div className="main-graph-container">
          {income.length===0 ? (
            <p>No data to display</p>
          ):(
            <BarChartDemo color="green" bgcolor="rgba(0,212,0,0.4)" labels={mappingLabelsIncome()} heading="Total Income" data={mappingDataIncome()}/>
          )}
         </div>
        </div>
      </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default dashboard