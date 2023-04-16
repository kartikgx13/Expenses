import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="main-navbar-section">
        <div className="navbar-container">
            <h1>Cashify</h1>
            <ul className="nav-links">
                <Link href="/dashboard"><li>Dashboard</li></Link>
                <Link href="/expenses"><li>Expenses</li></Link>
                <Link href="/incomes"><li>Income</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar