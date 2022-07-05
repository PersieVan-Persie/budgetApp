import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'

import Home from './components/home';


function App() {

const [transaction, setTransaction] = useState ([])


const addTransaction =((amount, name, transactionType) =>{

  setTransaction((item)=>[...item, {

    amount:amount,
    name:name,
    transactionType:transactionType

  }])
  
})
  return (
    

        <Home list={transaction} add={addTransaction}/>
  

  )
}

export default App;
