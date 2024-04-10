import Navbar from "../sidebar/Navbar";

const Recipient = () => {
    return (
        <div>
            <div className="preloader" id="preloader"></div>

            <a href="javascript:void(0)" className="scrollToTop"><i className="fas fa-angle-double-up"></i></a>
            <Navbar/>
            <section className="dashboard-section body-collapse pay step exchange">
                <div className="overlay pt-120">
                    <div className="container-fruid">
                        <div className="main-content">
                            <div className="head-area d-flex align-items-center justify-content-between">
                                <h4>Money Exchange</h4>
                                <div className="icon-area">
                                    <img src="src/assets/images/icon/support-icon.png" alt="icon"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="choose-recipient">
                                        <div className="step-area">
                                            <span className="mdr">Step 1 of 3</span>
                                            <h5>Choose Recipient</h5>
                                        </div>
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item recipient-list" role="presentation">
                                                <button className="nav-link my-recipients active" id="recipients-tab" data-bs-toggle="tab"
                                                    data-bs-target="#recipients" type="button" role="tab" aria-controls="recipients"
                                                    aria-selected="true">
                                                    <span className="icon-area">
                                                        <i className="icon-e-plus"></i>
                                                    </span>
                                                    <span>My Recipients</span>
                                                </button>
                                            </li>
                                            <li className="nav-item recipient-list" role="presentation">
                                                <button className="nav-link my-recipients" id="recent-tab" data-bs-toggle="tab"
                                                    data-bs-target="#recent" type="button" role="tab" aria-controls="recent"
                                                    aria-selected="false">
                                                    <span className="icon-area">
                                                        <i className="icon-f-user"></i>
                                                    </span>
                                                    <span>Most Recent</span>
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="recipients" role="tabpanel" aria-labelledby="recipients-tab">
                                                <div className="section-head">
                                                    <h5>Add a new recipient</h5>
                                                    <p>This information must be accurate or your transfer will be delayed.</p>
                                                </div>
                                                <form action="#">
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientsfname">First Name</label>
                                                                <input type="text" id="recipientsfname" placeholder="Dana"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientslname">Last Name</label>
                                                                <input type="text" id="recipientslname" placeholder="Patton"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientslAddress">Address Line 1 (Option)</label>
                                                                <input type="text" id="recipientslAddress" placeholder="Address Line 1"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientslCity">City/Town</label>
                                                                <input type="text" id="recipientslCity" placeholder="City/Town"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientslCode">Postcode</label>
                                                                <input type="text" id="recipientslCode" placeholder="Postcode"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientsphone">Phone</label>
                                                                <div className="select-area d-flex align-items-center">
                                                                    <select>
                                                                        <option value="1">+1</option>
                                                                        <option value="2">+2</option>
                                                                        <option value="3">+3</option>
                                                                    </select>
                                                                    <input type="text" id="recipientsphone" placeholder="(070) 4567-8800"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientsemail">Email Address</label>
                                                                <input type="text" id="recipientsemail" placeholder="Email Address"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="bankname">Bank Name</label>
                                                                <input type="text" id="bankname" placeholder="Bank Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="branchname">Branch Name</label>
                                                                <input type="text" id="branchname" placeholder="Branch Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="accountnumber">Account number</label>
                                                                <input type="text" id="accountnumber" placeholder="Account number"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="sendingreason">Reason for Sending</label>
                                                                <input type="text" id="sendingreason" placeholder="Reason for Sending"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="footer-area mt-40">
                                                                <a href="money-exchange.html">Previous Step</a>
                                                                <a href="money-exchange-step-2.html" className="active">Next</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                                                <div className="user-select">
                                                    <div className="single-user">
                                                        <div className="left d-flex align-items-center">
                                                            <div className="img-area">
                                                                <img src="src/assets/images/profile-1.png" alt="image"/>
                                                            </div>
                                                            <div className="text-area">
                                                                <p>Herman Tran</p>
                                                                <span className="mdr"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4f072a3d222e217c7a0f28222e2623612c2022">[email&#160;protected]</a></span>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <a href="javascript:void(0)">Choose</a>
                                                        </div>
                                                    </div>
                                                    <div className="single-user">
                                                        <div className="left d-flex align-items-center">
                                                            <div className="img-area">
                                                                <img src="src/assets/images/profile-2.png" alt="image"/>
                                                            </div>
                                                            <div className="text-area">
                                                                <p>Morris Lucas</p>
                                                                <span className="mdr"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dd90b2afafb4aeefef9dbab0bcb4b1f3beb2b0">[email&#160;protected]</a></span>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <a href="javascript:void(0)">Choose</a>
                                                        </div>
                                                    </div>
                                                    <div className="single-user">
                                                        <div className="left d-flex align-items-center">
                                                            <div className="img-area">
                                                                <img src="src/assets/images/profile-3.png" alt="image"/>
                                                            </div>
                                                            <div className="text-area">
                                                                <p>Willard Lyons</p>
                                                                <span className="mdr"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="66310f0a0a0714025f5f26010b070f0a4805090b">[email&#160;protected]</a></span>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <a href="javascript:void(0)">Choose</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="footer-area mt-40">
                                                        <a href="money-exchange.html">Previous Step</a>
                                                        <a href="money-exchange-step-2.html" className="active">Next</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="side-area">
                                        <p>Recipient gets</p>
                                        <div className="title-area">
                                            <h5>Bank Deposit</h5>
                                            <ul className="flag-area">
                                                <li>
                                                    <span className="icon-area">
                                                        <img src="src/assets/images/icon/flag-usa.png" alt="icon"/>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="icon-area">
                                                        <img src="src/assets/images/icon/flag-bd.png" alt="icon"/>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="deposit-details">
                                            <li>
                                                <span>You Send</span>
                                                <b>400.00 GBP</b>
                                            </li>
                                            <li>
                                                <span>They get</span>
                                                <b>45433.03 BDT</b>
                                            </li>
                                            <li>
                                                <span>Exchange rate</span>
                                                <b>1 GBP = 113.58257 BDT</b>
                                            </li>
                                            <li>
                                                <span>Our fee</span>
                                                <b>+0.99 GBP</b>
                                            </li>
                                        </ul>
                                        <ul className="deposit-details">
                                            <li>
                                                <span>Total to pay</span>
                                                <b>400.99 GBP</b>
                                            </li>
                                            <li>
                                                <span>They receive</span>
                                                <b>45433.03 BDT</b>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Recipient;