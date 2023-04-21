import React from 'react'
import TransactionWindow from '../components/TransactionWindow'
import Navbar from '../components/Navbar'
import TransactionIncome from '../components/TransactionIncome'

function incomes() {
  return (
    <>
    <section className="expense-income-section">
      <Navbar/>
      <TransactionIncome/>
    </section>
    </>
  )
}

export default incomes