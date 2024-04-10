import Navbar from '../sidebar/Navbar';

const Transactions = () => {
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
                                    <h4>Transactions</h4>
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="transactions-right d-flex align-items-center">
                                        <form action="#" className="flex-fill">
                                            <div className="form-group d-flex align-items-center">
                                                <img src="src/assets/images/icon/search.png" alt="icon"/>
                                                    <input type="text" placeholder="Type to search..."/>
                                                    </div>
                                                </form>
                                                <a href="javascript:void(0)">Monthly Statement</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="transactions-main">
                                        <div className="top-items">
                                            <h6>All Transactions</h6>
                                            <div className="export-area">
                                                <ul className="d-flex align-items-center">
                                                    <li><a href="javascript:void(0)"><img src="src/assets/images/icon/printer.png" alt="icon"/>Print</a></li>
                                                    <li><a href="javascript:void(0)"><img src="src/assets/images/icon/excel.png" alt="icon"/>Excel</a></li>
                                                    <li><a href="javascript:void(0)"><img src="src/assets/images/icon/pdf.png" alt="icon"/>PDF</a></li>
                                                    <li><a href="javascript:void(0)"><img src="src/assets/images/icon/csv.png" alt="icon"/>CSV</a></li>
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
                                                <select>
                                                    <option value="1">Balance</option>
                                                    <option value="2">Balance</option>
                                                    <option value="3">Balance</option>
                                                </select>
                                            </div>
                                            <div className="single-item">
                                                <select>
                                                    <option>All Filters</option>
                                                    <option value="1">Filters 1</option>
                                                    <option value="2">Filters 2</option>
                                                    <option value="3">Filters 3</option>
                                                </select>
                                            </div>
                                            <div className="single-item">
                                                <button>Clear Filters</button>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name/ Business</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Bangkok Bank</p>
                                                            <p className="mdr">Withdraw to bank account</p>
                                                        </th>
                                                        <td>
                                                            <p>03:00 PM</p>
                                                            <p className="mdr">10 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p className="inprogress">In Progress</p>
                                                        </td>
                                                        <td>
                                                            <p>-$520</p>
                                                            <p className="mdr">$3.0</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Envato Pty Ltd</p>
                                                            <p className="mdr">Marketplace Payment Received</p>
                                                        </th>
                                                        <td>
                                                            <p>04:30 PM</p>
                                                            <p className="mdr">01 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p className="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>+$450</p>
                                                            <p className="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Mailchimp</p>
                                                            <p className="mdr">Subscription Service Payment</p>
                                                        </th>
                                                        <td>
                                                            <p>01:15 PM</p>
                                                            <p className="mdr">25 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p className="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>-$100</p>
                                                            <p className="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Facebook Ads</p>
                                                            <p className="mdr">Ads Service</p>
                                                        </th>
                                                        <td>
                                                            <p>07:05 PM</p>
                                                            <p className="mdr">15 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p className="pending">Pending</p>
                                                        </td>
                                                        <td>
                                                            <p>$200</p>
                                                            <p className="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Upwork Escow Inc</p>
                                                            <p className="mdr">Payment payment</p>
                                                        </th>
                                                        <td>
                                                            <p>04:02 PM</p>
                                                            <p className="mdr">10 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p className="completed">Completed</p>
                                                        </td>
                                                        <td>
                                                            <p>$450</p>
                                                            <p className="mdr">$.5</p>
                                                        </td>
                                                    </tr>
                                                    <tr data-bs-toggle="modal" data-bs-target="#transactionsMod">
                                                        <th scope="row">
                                                            <p>Ron Stewart</p>
                                                            <p className="mdr">Payment Refund</p>
                                                        </th>
                                                        <td>
                                                            <p>11:00 PM</p>
                                                            <p className="mdr">21 Mar 2022</p>
                                                        </td>
                                                        <td>
                                                            <p className="cancelled">Cancelled</p>
                                                        </td>
                                                        <td>
                                                            <p>+$450</p>
                                                            <p className="mdr">No Fees</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <nav aria-label="Page navigation" className="d-flex justify-content-center mt-40">
                                            <ul className="pagination justify-content-center align-items-center mb-40">
                                                <li className="page-item">
                                                    <a className="page-link previous" href="javascript:void(0)" aria-label="Previous">
                                                        <i className="fa-solid fa-angles-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link previous" href="javascript:void(0)" aria-label="Previous">
                                                        <i className="fa-solid fa-angle-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                                                <li className="page-item"><a className="page-link active" href="javascript:void(0)">2</a></li>
                                                <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                                                <li className="page-item"><a className="page-link" href="javascript:void(0)">...</a></li>
                                                <li className="page-item">
                                                    <a className="page-link next" href="javascript:void(0)" aria-label="Next">
                                                        <i className="fa-solid fa-angle-right"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link next" href="javascript:void(0)" aria-label="Next">
                                                        <i className="fa-solid fa-angles-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <div className="transactions-popup">
                <div className="container-fruid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="modal fade" id="transactionsMod" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header justify-content-between">
                                            <h5>Transaction Details</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <div className="main-content">
                                            <div className="row">
                                                <div className="col-sm-5 text-center">
                                                    <div className="icon-area">
                                                        <img src="src/assets/images/icon/transaction-details-icon.png" alt="icon"/>
                                                    </div>
                                                    <div className="text-area">
                                                        <h6>Envato Pty Ltd</h6>
                                                        <p>16 Jan 2022</p>
                                                        <h3>717.14 USD</h3>
                                                        <p className="com">Completed</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="right-area">
                                                        <h6>Transaction Details</h6>
                                                        <ul className="payment-details">
                                                            <li>
                                                                <span>Payment Amount</span>
                                                                <span>718.64 USD</span>
                                                            </li>
                                                            <li>
                                                                <span>Fee</span>
                                                                <span>1.50 USD</span>
                                                            </li>
                                                            <li>
                                                                <span>Total Amount</span>
                                                                <span>717.14 USD</span>
                                                            </li>
                                                        </ul>
                                                        <ul className="payment-info">
                                                            <li>
                                                                <p>Payment From</p>
                                                                <span className="mdr">Envato Pty Ltd</span>
                                                            </li>
                                                            <li>
                                                                <p>Payment Description</p>
                                                                <span className="mdr">Envato Feb 2022 Member Payment</span>
                                                            </li>
                                                            <li>
                                                                <p>Transaction  ID:</p>
                                                                <span className="mdr">6559595979565959895559595</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;