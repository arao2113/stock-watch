import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Stock from './Stock';


const Header = () => {

    const dataFromLocalStorage = JSON.parse(localStorage.getItem('my-stocks')  || "[]")

    const [ticker, setTicker] = useState('');
    const [stocks, setStocks] = useState(dataFromLocalStorage);


    const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${process.env.REACT_APP_API_KEY}`;
    

    // AJAX call for individual stock
    const getData = (e) => {
        e.preventDefault();
        axios.get(url)
        .then((response) => {
            setStocks([...stocks, response.data]);
            setTicker('');
        })
        .catch((error) => {
            console.log(error);
        },);
    }

    // Set stock rows in local storage
    useEffect(() => {
        localStorage.setItem('my-stocks', JSON.stringify(stocks))
    }, [stocks])

    // Remove an item
    const removeItem = (peRatio) => {
        const newStocks = stocks.filter(stock => stock.peRatio !== peRatio);
        setStocks(newStocks);
    }

    return (
        <div className='header'>
            <h1 id='brand'>Stock Watch: {ticker}</h1>
                <div className='input-flow'>
                    <form onSubmit={getData}>
                        <input 
                            value={ticker}
                            onChange={(e) => setTicker(e.target.value)}
                            className='ticker-input' 
                            type='text' 
                            placeholder='Ticker Symbol' 
                            maxLength='5' minLength='1'/>
                            <button 
                            className='add'
                            disabled={!ticker}
                            type='submit'>Add ✅</button>
                    </form>
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
                        <tbody>
                            {stocks.map((stock) => {
                                return (
                                    <Stock {...stock} key={stock.peRatio} removeItem={removeItem}/>
                                )
                            })}
                        </tbody>
                </table>
        </div>
    )
}

export default Header
