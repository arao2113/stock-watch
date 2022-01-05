const Stock = (props) => {

    return (
        <table>
            
                <tr className="table-data">
                <td>{props.latestTime}</td>
                <td>{props.symbol}</td>
                <td>{props.companyName}</td>
                <td>{props.iexOpen}</td>
                <td>{props.iexClose}</td>
                <td>{props.change}</td>
                <td>{props.week52High}</td>
                <td>{props.week52Low}</td>
                <td></td>
                </tr>
        
            
        </table>
    )
}

export default Stock
