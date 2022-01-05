import React, { useState } from 'react'
import axios from 'axios';
import Stock from './Stock';

const Header = () => {

    const [ticker, setTicker] = useState('');
    const [stocks, setStocks] = useState({});

    const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${process.env.REACT_APP_API_KEY}`;

    // AJAX call for individual stock
    const getData = () => {
        axios.get(url)
        .then((response) => {
            console.log(response);
            setStocks(response.data)
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        },);
    }

    // Handles input when users hit enter
    const handleKeypress = (e) => {
        if(e.keyCode === 13) {
            getData();
        }
    }


    return (
        <div className='header'>
                <h1 id='brand'>Stock Watch: {ticker}</h1>
                <div className='input-flow'>
                    <input 
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value)}
                    onKeyDown={handleKeypress}
                    className='ticker-input' 
                    type='text' 
                    placeholder='Ticker Symbol' 
                    maxLength='5' minLength='1'/>
                    <button 
                    className='add' 
                    onClick={getData}
                    type='submit'>Add</button>
                </div>
                <table >
                    <thead>
                        <tr className='main-table'>
                            <th>Date</th>
                            <th>Symbol</th>
                            <th>Company Name</th>
                            <th>Open</th>
                            <th>Close</th>
                            <th>Change</th>
                            <th>52 w/ High</th>
                            <th>52 w/ Low</th>
                            <th></th>
                        </tr>
                    </thead>
                        <Stock {...stocks} />
                </table>
        </div>
    )
}

export default Header
