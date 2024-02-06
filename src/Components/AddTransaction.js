import React, { useState } from 'react'

const AddTransaction = () => {

    var [text, setText] = useState('text')
    var [amount, setAmount] = useState('0')

    const handleText = ((e) => {
        setText(e.target.value);

    })
    const handleAmount = ((e) => {
        setAmount(e.target.value);
    })
    return (
        <>
            <h3>Add new transaction</h3>
            <form className="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={handleText}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={handleAmount} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form >

        </>
    )
}


export default AddTransaction
