import React, { useContext } from 'react';

import Transaction from './Transaction';
import { GlobalContext } from './GlobalState';

function TransactionList() {
    const { transaction } = useContext(GlobalContext);

    return (
        <>

            <h3>History</h3>
            <ul className='list' >
                {transaction.map(transaction => (<transaction key={transaction.id} transaction={transaction} />))}

            </ul>
        </>
    )
}

export default Transaction