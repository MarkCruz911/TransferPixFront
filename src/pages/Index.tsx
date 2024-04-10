import Navbar from "../sidebar/Navbar";

const Index = () => {
    return (
        <div>
            {/*<div className="preloader" id="preloader"></div>*/}
            <a href="javascript:void(0)" className="scrollToTop"><i className="fas fa-angle-double-up"></i></a>
            <Navbar/>
            <section className="dashboard-section body-collapse">
                <div className="overlay pt-120">
                    <div className="container-fruid">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="section-content">
                                    <div className="acc-details">
                                        <div className="top-area">
                                            <div className="left-side">
                                                <h5>Hi, Kevin Martin!</h5>
                                                <h2>$30,700.00</h2>
                                                <h5 className="receive">Last Received <span>$25,700.00</span></h5>
                                            </div>
                                            <div className="right-side">
                                                <div className="right-top">
                                                    <select>
                                                        <option value="1">US Dollar</option>
                                                        <option value="2">US Dollar</option>
                                                        <option value="3">US Dollar</option>
                                                    </select>
                                                    <div className="dropdown-area">
                                                        <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <img src="src/assets/images/icon/option.png" alt="icon"/>
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li><a className="dropdown-item" href="#">Fiat Currency</a></li>
                                                            <li><a className="dropdown-item" href="#">crypto Currency</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="right-bottom">
                                                    <h4>$30,700.00</h4>
                                                    <h5>Payouts</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-area">
                                            <div className="left-side">
                                                <a href="pay.html" className="cmn-btn">Transfer Money</a>
                                                <a href="deposit-money.html" className="cmn-btn">Add Money</a>
                                                <a href="withdraw-money-step-1.html" className="cmn-btn">Withdraw</a>
                                            </div>
                                            <div className="right-side">
                                                <div className="dropdown-area">
                                                    <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src="src/assets/images/icon/option.png" alt="icon"/>
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="recipients.html">Recipients</a></li>
                                                        <li><a className="dropdown-item" href="receive-step-1.html">Request Money</a></li>
                                                        <li><a className="dropdown-item" href="pay-step-1.html">Send Money</a></li>
                                                        <li><a className="dropdown-item" href="pay-step-1.html">Bill Pay</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transactions-area mt-40">
                                        <div className="section-text">
                                            <h5>Transactions</h5>
                                            <p>Updated every several minutes</p>
                                        </div>
                                        <div className="top-area d-flex align-items-center justify-content-between">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="latest-tab" data-bs-toggle="tab"
                                                        data-bs-target="#latest" type="button" role="tab" aria-controls="latest"
                                                        aria-selected="true">Latest</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="upcoming-tab" data-bs-toggle="tab"
                                                        data-bs-target="#upcoming" type="button" role="tab"
                                                        aria-controls="upcoming" aria-selected="false">Upcoming</button>
                                                </li>
                                            </ul>
                                            <div className="view-all d-flex align-items-center">
                                                <a href="javascript:void(0)">View All</a>
                                                <img src="src/assets/images/icon/right-arrow.png" alt="icon"/>
                                            </div>
                                        </div>
                                        <div className="tab-content mt-40">
                                            <div className="tab-pane fade show active" id="latest" role="tabpanel"
                                                aria-labelledby="latest-tab">
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
                                            </div>
                                            <div className="tab-pane fade" id="upcoming" role="tabpanel"
                                                aria-labelledby="upcoming-tab">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="side-items">
                                    <div className="single-item">
                                        <div className="section-text d-flex align-items-center justify-content-between">
                                            <h6>Linked Payment system</h6>
                                            <div className="right-side">
                                                <div className="dropdown-area">
                                                    <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src="src/assets/images/icon/option.png" alt="icon"/>
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="account.html">Update</a></li>
                                                        <li><a className="dropdown-item" href="javascript:void(0)">Virtual card</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="single-card">
                                                    <button type="button" className="reg w-100" data-bs-toggle="modal"
                                                        data-bs-target="#cardMod">
                                                        <img src="src/assets/images/visa-card.png" alt="image" className="w-100"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="single-card">
                                                    <button type="button" className="reg w-100" data-bs-toggle="modal"
                                                        data-bs-target="#cardMod">
                                                        <img src="src/assets/images/paylio-card.png" alt="image" className="w-100"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="single-card">
                                                    <button type="button" className="reg w-100" data-bs-toggle="modal"
                                                        data-bs-target="#cardMod">
                                                        <img src="src/assets/images/paypal-card.png" alt="image" className="w-100"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="single-card">
                                                    <button type="button" className="reg w-100" data-bs-toggle="modal"
                                                        data-bs-target="#cardMod">
                                                        <img src="src/assets/images/blockchain-card.png" alt="image" className="w-100"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="single-card">
                                                    <button type="button" className="reg w-100" data-bs-toggle="modal"
                                                        data-bs-target="#addcardMod">
                                                        <img src="src/assets/images/add-new.png" alt="image" className="w-100"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="section-text d-flex align-items-center justify-content-between">
                                            <h6>Payment Analytics</h6>
                                            <div className="select-box">
                                                <select>
                                                    <option>Monthly</option>
                                                    <option value="1">Jan</option>
                                                    <option value="2">Feb</option>
                                                    <option value="3">Mar</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div id="chart"></div>
                                    </div>
                                    <div className="single-item">
                                        <div className="section-text d-flex align-items-center justify-content-between">
                                            <h6>Recipients</h6>
                                            <div className="view-all d-flex align-items-center">
                                                <a href="javascript:void(0)">View All</a>
                                                <img src="src/assets/images/icon/right-arrow.png" alt="icon"/>
                                            </div>
                                        </div>
                                        <ul className="recipients-item">
                                            <li>
                                                <p className="left d-flex align-items-center">
                                                    <img src="src/assets/images/recipients-1.png" alt="icon"/>
                                                        <span className="info">
                                                            <span>Phil King</span>
                                                            <span>08:00 AM — 19 August</span>
                                                        </span>
                                                </p>
                                                <p className="right">
                                                    <span> +$345</span>
                                                    <span>Payment</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="left d-flex align-items-center">
                                                    <img src="src/assets/images/recipients-2.png" alt="icon"/>
                                                        <span className="info">
                                                            <span>Debra Wilson</span>
                                                            <span>08:00 AM — 19 August</span>
                                                        </span>
                                                </p>
                                                <p className="right">
                                                    <span className="loss">-$850</span>
                                                    <span>Refund</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="left d-flex align-items-center">
                                                    <img src="src/assets/images/recipients-3.png" alt="icon"/>
                                                        <span className="info">
                                                            <span>Philip Henry</span>
                                                            <span>08:00 AM — 19 August</span>
                                                        </span>
                                                </p>
                                                <p className="right">
                                                    <span>+$2.050</span>
                                                    <span>Payment</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="left d-flex align-items-center">
                                                    <img src="src/assets/images/recipients-4.png" alt="icon"/>
                                                        <span className="info">
                                                            <span>Erin Garcia</span>
                                                            <span>08:00 AM — 19 August</span>
                                                        </span>
                                                </p>
                                                <p className="right">
                                                    <span> +$900</span>
                                                    <span>Payment</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card-popup">
                <div className="container-fruid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="modal fade" id="cardMod" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header justify-content-center">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <div className="main-content">
                                            <div className="top-area mb-40 mt-40 text-center">
                                                <div className="card-area mb-30">
                                                    <img src="src/assets/images/visa-card-2.png" alt="image"/>
                                                </div>
                                                <div className="text-area">
                                                    <h5>Paylio payment Card </h5>
                                                    <p>Linked: 01 Jun 2021</p>
                                                </div>
                                            </div>
                                            <div className="tab-area d-flex align-items-center justify-content-between">
                                                <ul className="nav nav-tabs mb-30" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="btn-link" id="cancel-tab" data-bs-toggle="tab"
                                                            data-bs-target="#cancel" type="button" role="tab"
                                                            aria-controls="cancel" aria-selected="false">
                                                            <img src="src/assets/images/icon/limit.png" alt="icon"/>
                                                                Set transfer limit
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="d-none" id="limit-tab" data-bs-toggle="tab"
                                                            data-bs-target="#limit" type="button" role="tab"
                                                            aria-controls="limit" aria-selected="true"></button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <img src="src/assets/images/icon/remove.png" alt="icon"/>
                                                                Remove from Linked
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-content mt-30">
                                                <div className="tab-pane fade show active" id="limit" role="tabpanel"
                                                    aria-labelledby="limit-tab">
                                                    <div className="bottom-area">
                                                        <p className="history">Transaction History : <span>20</span></p>
                                                        <ul>
                                                            <li>
                                                                <p className="left">
                                                                    <span>03:00 PM</span>
                                                                    <span>17 Oct, 2020</span>
                                                                </p>
                                                                <p className="right">
                                                                    <span>$160.48</span>
                                                                    <span>Withdraw</span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p className="left">
                                                                    <span>01:09 PM</span>
                                                                    <span>15 Oct, 2021</span>
                                                                </p>
                                                                <p className="right">
                                                                    <span>$106.58</span>
                                                                    <span>Withdraw</span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p className="left">
                                                                    <span>04:00 PM</span>
                                                                    <span>12 Oct, 2020</span>
                                                                </p>
                                                                <p className="right">
                                                                    <span>$176.58</span>
                                                                    <span>Withdraw</span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p className="left">
                                                                    <span>06:00 PM</span>
                                                                    <span>25 Oct, 2020</span>
                                                                </p>
                                                                <p className="right">
                                                                    <span>$167.85</span>
                                                                    <span>Withdraw</span>
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="cancel" role="tabpanel"
                                                    aria-labelledby="cancel-tab">
                                                    <div className="main-area">
                                                        <div className="transfer-area">
                                                            <p>Set a transfer limit for paylio payment Card</p>
                                                            <p className="mdr">Transfer Limit</p>
                                                        </div>
                                                        <form action="#">
                                                            <div className="input-area">
                                                                <input className="xxlr" placeholder="400.00" type="number"/>
                                                                    <select>
                                                                        <option value="1">USD</option>
                                                                        <option value="2">USD</option>
                                                                        <option value="3">USD</option>
                                                                    </select>
                                                            </div>
                                                            <div
                                                                className="bottom-area d-flex align-items-center justify-content-between">
                                                                <a href="javascript:void(0)" className="cmn-btn cancel">Cancel and
                                                                    Back</a>
                                                                <a href="javascript:void(0)" className="cmn-btn">Confirm Transfer
                                                                    Limit</a>
                                                            </div>
                                                        </form>
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
            <div className="add-card">
                <div className="container-fruid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="modal fade" id="addcardMod" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header justify-content-between">
                                            <h6>Add Card</h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <form action="#">
                                            <div className="row justify-content-center">
                                                <div className="col-md-12">
                                                    <div className="single-input">
                                                        <label htmlFor="cardNumber">Card Number</label>
                                                        <input type="text" id="cardNumber"
                                                            placeholder="5890 - 6858 - 6332 - 9843"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-input">
                                                        <label htmlFor="cardHolder">Card Holder</label>
                                                        <input type="text" id="cardHolder" placeholder="Alfred Davis"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-input">
                                                        <label htmlFor="month">Month</label>
                                                        <input type="text" id="month" placeholder="12"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-input">
                                                        <label htmlFor="year">Year</label>
                                                        <input type="text" id="year" placeholder="2025"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="btn-border w-100">
                                                        <button className="cmn-btn w-100">Add Card</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default Index;