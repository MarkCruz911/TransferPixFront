
interface TransactionProps {
    companyName: string;
    description: string;
    time: string;
    date: string;
    status: string;
    amount: string;
    fees: string;
}

const TransactionOne = (props:TransactionProps) => {
    
    return (
        <tr className="">{/*data-bs-toggle="modal" data-bs-target="#transactionsMod"*/}
            <th scope="row">
                <p>{props.companyName}</p>
                <p className="mdr">{props.description}</p>
            </th>
            <td>
                <p>{props.time}</p>
                <p className="mdr">{props.date}</p>
            </td>
            <td>
                <p className={props.status}>{props.status.charAt(0).toUpperCase() + props.status.slice(1)}</p>
            </td>
            <td>
                <p>{props.amount}</p>
                <p className="mdr">{props.fees}</p>
            </td>
        </tr>
    );
};

export default TransactionOne;