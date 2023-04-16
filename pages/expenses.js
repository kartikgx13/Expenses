import React from 'react'
import TransactionWindow from '../components/TransactionWindow'

function expenses() {
  return (
    <>
    <section className="expense-income-section">
    <TransactionWindow btn_class="add-expense-btn" form_title="Expenses" title_type="Expense title" amount_type="Expense amount" add_type="Add Expense"/>
    </section>
    </>
  )
}

export default expenses