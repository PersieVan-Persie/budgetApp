import "../css/add.css"
import React,{useState} from "react"

function AddItem(props){

    const [amount,setAmount]= useState('');
    const [name,setItem]= useState('');
    const [transactionType,setTransactionType] =useState('');


    const add =((item)=>{
        console.log(name)
        console.log(amount);
        console.log(transactionType);

        props.add(amount, name, transactionType);
 
    })
    return(
        <div className="container">
            
            <input placeholder="Enter item" onChange={(e)=>setItem(e.target.value)}
            />{" "}
            <br></br>
            <input placeholder="Enter Amount"onChange={(e)=>setItem(e.target.value)}
            />{" "}
            <br></br>
            
          

        <select onChange ={(e)=>setTransactionType(e.target.value)}>

            <option value="income">Income</option>
            <option value="Expense">Income</option>
        </select>
        <br></br>
        <button className="btn" onClick={add}>Add</button>


        </div>

    )
}

export default AddItem;