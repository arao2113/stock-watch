const Stock = (stocks) => {
    
    return (
        <tr className="table-data">
            <td>{stocks.latestTime}</td>
            <td>{stocks.symbol}</td>
            <td>{stocks.companyName}</td>
            <td>{stocks.iexOpen}</td>
            <td>{stocks.iexClose}</td>
            <td>{stocks.change}</td>
            <td>{stocks.week52High}</td>
            <td>{stocks.week52Low}</td>
            <td>
                <button className="delete" onClick={() => stocks.removeItem(stocks.peRatio)}>❌</button>
            </td>
        </tr>
    )
}

export default Stock