import React, { useContext } from 'react'
import { GlobalContext } from './Components/globalState';

function Balance() {
    const { transaction } = useContext(GlobalContext);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>Rs 0.00</h1>

        </>
    )
}

export default Balance