import Navbar from "../sidebar/Navbar";

const Transfer = () => {
    return (
        <div>
            <div className="preloader" id="preloader"></div>
            <a href="javascript:void(0)" className="scrollToTop"><i className="fas fa-angle-double-up"></i></a>
            <Navbar/>
            <section className="dashboard-section body-collapse pay step step-2">
                <div className="overlay pt-120">
                    <div className="container-fruid">
                        <div className="main-content">
                            <div className="head-area d-flex align-items-center justify-content-between">
                                <h4>Money Exchange</h4>
                                <div className="icon-area">
                                    <img src="src/assets/images/icon/support-icon.png" alt="icon"/>
                                </div>
                            </div>
                            <form action="#">
                                <div className="exchange-content">
                                    <div className="send-banance">
                                        <span className="mdr">You Send</span>
                                        <div className="input-area">
                                            <input className="xxlr" placeholder="400.00" type="number"/>
                                                <select>
                                                    <option value="1">USD</option>
                                                    <option value="2">USD</option>
                                                    <option value="3">USD</option>
                                                </select>
                                        </div>
                                        <p>Available Balance<b>$30,700.00</b></p>
                                    </div>
                                    <div className="send-banance recipient">
                                        <span className="mdr">Recipient gets</span>
                                        <div className="input-area">
                                            <input className="xxlr" placeholder="45162.98" type="number"/>
                                                <select>
                                                    <option value="1">BDT</option>
                                                    <option value="2">BDT</option>
                                                    <option value="3">BDT</option>
                                                </select>
                                        </div>
                                        <p>Today’s rate: <b>1 GBP = 112.90745 BDT</b></p>
                                    </div>
                                </div>
                                <div className="pay-option">
                                    <div className="pay-option-single">
                                        <h6>Delivery method</h6>
                                        <select>
                                            <option value="1">Bank Tranfer</option>
                                            <option value="2">Bank Tranfer</option>
                                            <option value="3">Bank Tranfer</option>
                                        </select>
                                    </div>
                                    <div className="pay-option-single border-area">
                                        <h6>Bank Transfer Partner</h6>
                                        <select>
                                            <option value="1">Dutch bangla bank</option>
                                            <option value="2">Dutch bangla bank</option>
                                            <option value="3">Dutch bangla bank</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="pay-details">
                                    <ul>
                                        <li>
                                            <p>Estimated fee</p>
                                            <p>+0.33GBP</p>
                                        </li>
                                        <li>
                                            <p>Transfer time</p>
                                            <p>Same Day</p>
                                        </li>
                                    </ul>
                                    <div className="tatal-pay">
                                        <div className="single">
                                            <h5>Total To Pay</h5>
                                            <h5>400.99GBP</h5>
                                        </div>
                                        <div className="single">
                                            <p>Recipient gets</p>
                                            <h5>45299.58BDT</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-area mt-40">
                                    <a href="recipient" className="w-100 active text-center">Continue</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Transfer;