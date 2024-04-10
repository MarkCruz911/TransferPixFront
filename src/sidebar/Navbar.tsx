
const Navbar = () => {
    return (
            <header className="header-section body-collapse">
                <div className="overlay">
                    <div className="container-fruid">
                        <div className="row d-flex header-area">
                            <div className="navbar-area d-flex align-items-center justify-content-between">
                                <div className="sidebar-icon">
                                    <img src={"src/assets/images/icon/menu.png"} alt="icon"/>
                                </div>
                                <form action="#" className="flex-fill">
                                    <div className="form-group d-flex align-items-center">
                                        <img src={"src/assets/images/icon/search.png"} alt="icon"/>
                                            <input type="text" placeholder="Type to search..."/>
                                            </div>
                                        </form>
                                        <div className="dashboard-nav">
                                            <div className="single-item language-area">
                                                <div className="language-btn">
                                                    <img src={"src/assets/images/icon/lang.png"} alt="icon"/>
                                                </div>
                                                <ul className="main-area language-content">
                                                    <li>English</li>
                                                    <li>Hindi</li>
                                                    <li className="active">English (US)</li>
                                                    <li>Japanese</li>
                                                    <li>Kannada</li>
                                                    <li>Lithuanian</li>
                                                </ul>
                                            </div>
                                            <div className="single-item notifications-area">
                                                <div className="notifications-btn">
                                                    <img src="src/assets/images/icon/bell.png" className="bell-icon" alt="icon"/>
                                                </div>
                                                <div className="main-area notifications-content">
                                                    <div className="head-area d-flex justify-content-between">
                                                        <h5>Notifications</h5>
                                                        <span className="mdr">4</span>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)" className="d-flex">
                                                                <div className="img-area">
                                                                    <img src="src/assets/images/user-1.png" className="max-un" alt="image"/>
                                                                </div>
                                                                <div className="text-area">
                                                                    <p className="mdr">You received a payment of <b>$134.00</b> from <b>Anna
                                                                        Green</b></p>
                                                                    <p className="mdr time-area">09.39AM</p>
                                                                </div>
                                                            </a>
                                                            <i className="fa-solid fa-caret-right"></i>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="d-flex">
                                                                <div className="img-area">
                                                                    <img src="src/assets/images/user-2.png" className="max-un" alt="image"/>
                                                                </div>
                                                                <div className="text-area">
                                                                    <p className="mdr"><b>James Deed</b> requested a payment of
                                                                        <b>£890.00</b>
                                                                    </p>
                                                                    <p className="mdr time-area">08.09AM</p>
                                                                </div>
                                                            </a>
                                                            <i className="fa-solid fa-caret-right"></i>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="d-flex">
                                                                <div className="img-area">
                                                                    <img src="src/assets/images/master-card.png" className="max-un" alt="image"/>
                                                                </div>
                                                                <div className="text-area">
                                                                    <p className="mdr">Your new payment method has beed added successfully
                                                                    </p>
                                                                    <p className="mdr time-area">09.39AM</p>
                                                                </div>
                                                            </a>
                                                            <i className="fa-solid fa-caret-right"></i>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)" className="d-flex">
                                                                <div className="img-area">
                                                                    <img src="src/assets/images/user-3.png" className="max-un" alt="image"/>
                                                                </div>
                                                                <div className="text-area">
                                                                    <p className="mdr">You received a payment of <b>$250.00</b> from Goerge
                                                                        Michael</p>
                                                                    <p className="mdr time-area">Yesterday</p>
                                                                </div>
                                                            </a>
                                                            <i className="fa-solid fa-caret-right"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-item user-area">
                                                <div className="profile-area d-flex align-items-center">
                                                    <span className="user-profile">
                                                        <img src="src/assets/images/avatar.png" alt="User"/>
                                                    </span>
                                                    <i className="fa-solid fa-sort-down"></i>
                                                </div>
                                                <div className="main-area user-content">
                                                    <div className="head-area d-flex align-items-center">
                                                        <div className="profile-img">
                                                            <img src="src/assets/images/avatar-2.png" alt="User"/>
                                                        </div>
                                                        <div className="profile-head">
                                                            <a href="javascript:void(0)">
                                                                <h5>Kevin Martin</h5>
                                                            </a>
                                                            <p className="wallet-id">Wallet ID: 6264849965</p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li className="border-area">
                                                            <a href="account.html"><i className="fas fa-cog"></i>Settings</a>
                                                        </li>
                                                        <li>
                                                            <a href="/"><i className="fas fa-sign-out"></i>Logout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-wrapper">
                                        <div className="close-btn">
                                            <i className="fa-solid fa-xmark"></i>
                                        </div>
                                        <div className="sidebar-logo">
                                            <a href="dashboard"><img src={"src/assets/images/transfer.png"} alt="logo"/></a>
                                        </div>
                                        <ul>
                                            <li className="active">
                                                <a href="dashboard">
                                                    <img src="src/assets/images/icon/dashboard.png" alt="Dashboard"/> <span>Dashboard</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="transactions">
                                                    <img src="src/assets/images/icon/transactions.png" alt="Transactions"/> <span>Transactions</span>
                                                </a>
                                            </li>
                                            {/*
                                            <li>
                                                <a href="pay.html">
                                                    <img src="src/assets/images/icon/pay.png" alt="Pay"/> <span>Pay</span>
                                                </a>
                                            </li>
                                            */}
                                            {/*
                                            <li>
                                                <a href="receive-step-1.html">
                                                    <img src="src/assets/images/icon/receive.png" alt="Receive"/> <span>Receive</span>
                                                </a>
                                            </li>
                                            */}
                                            <li>
                                                <a href="transfer">
                                                    <img src="src/assets/images/icon/exchange.png" alt="Exchange"/> <span>Exchange</span>
                                                </a>
                                            </li>
                                            {/*
                                            <li>
                                                <a href="recipients.html">
                                                    <img src="src/assets/images/icon/recipients.png" alt="Recipients"/> <span>Recipients</span>
                                                </a>
                                            </li>
                                            */}
                                            {/*
                                            <li>
                                                <a href="crypto.html">
                                                    <img src="src/assets/images/icon/crypto.png" alt="Crypto"/> <span>Crypto</span>
                                                </a>
                                            </li>
                                            */}
                                            {/*
                                            <li>
                                                <a href="deposit-money.html">
                                                    <img src="src/assets/images/icon/deposit.png" alt="Deposit"/> <span>Deposit Money</span>
                                                </a>
                                            </li>
                                            */}
                                            {/*
                                            <li>
                                                <a href="withdraw-money-step-1.html">
                                                    <img src="src/assets/images/icon/withdraw.png" alt="Withdraw"/> <span>Withdraw Money</span>
                                                </a>
                                            </li>
                                            */}
                                        </ul>
                                        <ul className="bottom-item">
                                            <li>
                                                <a href="#">
                                                    <img src="src/assets/images/icon/account.png" alt="Account"/> <span>Account</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <img src="src/assets/images/icon/support.png" alt="Support"/> <span>Support</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <img src="src/assets/images/icon/quit.png" alt="Quit"/> <span>Quit</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="pt-120">
                                            <div className="invite-now">
                                                <div className="img-area">
                                                    <img src="src/assets/images/invite-now-illus.png" alt="Image"/>
                                                </div>
                                                <p>Invite your friend and get $25</p>
                                                <a href="javascript:void(0)" className="cmn-btn">Invite Now</a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </header>
    );
};

export default Navbar;