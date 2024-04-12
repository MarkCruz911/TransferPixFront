import Pagination from '../components/Pagination';
import TransactionDetail from '../components/TransactionDetail';
import TransactionOne from '../components/TransactionOne';
import Navbar from '../sidebar/Navbar';

const Transactions = () => {
    const transactionsData = [
        { id: 1, companyName: "Envato Pty Ltd", description: "Marketplace Payment Received", time: "04:30 PM", date: "01 Mar 2022", status: "completed", amount: "+$450", fees: "Sin Comisión" },
        { id: 2, companyName: "Bangkok Bank", description: "Withdraw to bank account", time: "03:00 PM", date: "10 Mar 2022", status: "inprogress", amount: "-$520", fees: "3.0 BOB" },
        { id: 3, companyName: "Mailchimp", description: "Subscription Service Payment", time: "01:15 PM", date: "25 Mar 2022", status: "completed", amount: "-$100", fees: "3.0 BOB" },
        { id: 4, companyName: "Facebook Ads", description: "Ads Service", time: "07:05 PM", date: "15 Mar 2022", status: "pending", amount: "-$200", fees: "5.0 BOB" },
        { id: 5, companyName: "Upwork Escow Inc", description: "Payment payment", time: "04:02 PM", date: "10 Mar 2022", status: "completed", amount: "+$450", fees: "Sin Comisión" },
        { id: 6, companyName: "Ron Stewart", description: "Payment Refund", time: "11:00 PM", date: "21 Mar 2022", status: "cancelled", amount: "-$450", fees: "5.0 BOB" },
        { id: 7, companyName: "Envato Pty Ltd", description: "Marketplace Payment Received", time: "04:30 PM", date: "01 Mar 2022", status: "completed", amount: "+$450", fees: "Sin Comisión" },
        { id: 8, companyName: "Bangkok Bank", description: "Withdraw to bank account", time: "03:00 PM", date: "10 Mar 2022", status: "inprogress", amount: "-$520", fees: "3.0 BOB" },
        { id: 9, companyName: "Mailchimp", description: "Subscription Service Payment", time: "01:15 PM", date: "25 Mar 2022", status: "completed", amount: "-$100", fees: "3.0 BOB" },
        { id: 10, companyName: "Facebook Ads", description: "Ads Service", time: "07:05 PM", date: "15 Mar 2022", status: "pending", amount: "-$200", fees: "5.0 BOB" },
        { id: 11, companyName: "Upwork Escow Inc", description: "Payment payment", time: "04:02 PM", date: "10 Mar 2022", status: "completed", amount: "+$450", fees: "Sin Comisión" },
        { id: 12, companyName: "Ron Stewart", description: "Payment Refund", time: "11:00 PM", date: "21 Mar 2022", status: "cancelled", amount: "-$450", fees: "5.0 BOB" }
        // Agrega más objetos de transacciones aquí según sea necesario
    ];
    return (
        <div>
            <div className="preloader" id="preloader"></div>
            <a href="javascript:void(0)" className="scrollToTop"><i className="fas fa-angle-double-up"></i></a>

            <Navbar />
            <section className="dashboard-section body-collapse transactions">
                <div className="overlay pt-120">
                    <div className="container-fruid">
                        <div className="head-area">
                            <div className="row">
                                <div className="col-lg-5 col-md-4">
                                    <h4>Transacciones</h4>
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="transactions-right d-flex align-items-center">
                                        <form action="#" className="flex-fill">
                                            <div className="form-group d-flex align-items-center">
                                                <img src="src/assets/images/icon/search.png" alt="icon" />
                                                <input type="text" placeholder="Transacción a Buscar ..." />
                                            </div>
                                        </form>
                                        <a href="javascript:void(0)">Estado Mensual</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="transactions-main">
                                    <div className="top-items">
                                        <h6>Todas las Transacciones</h6>
                                        <div className="export-area">
                                            <ul className="d-flex align-items-center">
                                                {/*<li><a href="javascript:void(0)"><img src="src/assets/images/icon/printer.png" alt="icon" />Print</a></li>*/}
                                                {/*<li><a href="javascript:void(0)"><img src="src/assets/images/icon/excel.png" alt="icon" />Excel</a></li>*/}
                                                {/*<li><a href="javascript:void(0)"><img src="src/assets/images/icon/pdf.png" alt="icon" />PDF</a></li>*/}
                                                {/*<li><a href="javascript:void(0)"><img src="src/assets/images/icon/csv.png" alt="icon" />CSV</a></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="filters-item">
                                        <div className="single-item">
                                            <select>
                                                <option value="1">23 Nov 2021- 21 Feb 2022</option>
                                                <option value="2">23 Feb 2021- 21 Mar 2022</option>
                                                <option value="3">23 Mar 2021- 21 Apr 2022</option>
                                            </select>
                                        </div>
                                        <div className="single-item">
                                            <button>Limpiar Filtros</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive overflow-x-auto h-[50%]">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Nombre/ Negocio</th>
                                                    <th scope="col">Fecha</th>
                                                    <th scope="col">Estado Transacción</th>
                                                    <th scope="col">Importe</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transactionsData.map(transaction => (
                                                    <TransactionOne 
                                                        key={transaction.id}
                                                        companyName={transaction.companyName}
                                                        description={transaction.description}
                                                        time={transaction.time}
                                                        date={transaction.date}
                                                        status={transaction.status}
                                                        amount={transaction.amount}
                                                        fees={transaction.fees}
                                                    />
                                                ))
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TransactionDetail/>
        </div>
    );
};

export default Transactions;