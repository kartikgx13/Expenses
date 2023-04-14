import React from 'react'
import { useState,useEffect } from 'react'


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
    </>
  )
}

export default home