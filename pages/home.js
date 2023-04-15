import React from 'react'
import { useState,useEffect } from 'react'
import Overview from '../components/Overview';


function home() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('/api/newlogin')
      .then(res => res.json())
      .then(user => setUserData(user));
  }, []);
  return (
    <>
    <h1>Hello</h1>
    <Overview/>
    </>
  )
}

export default home