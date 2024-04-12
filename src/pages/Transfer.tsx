import Navbar from "../sidebar/Navbar";

const Transfer = () => {
    return (
        <div>
            {/*<div className="preloader" id="preloader"></div>*/}
            <a href="javascript:void(0)" className="scrollToTop"><i className="fas fa-angle-double-up"></i></a>
            <Navbar/>
            <section className="dashboard-section body-collapse pay step step-2">
                <div className="overlay pt-120">
                    <div className="container-fruid">
                        <div className="main-content">
                            <div className="head-area d-flex align-items-center justify-content-between">
                                <h4>Transfer Pix</h4>
                                <div className="icon-area">
                                    <img src="src/assets/images/icon/support-icon.png" alt="icon"/>
                                </div>
                            </div>
                            <form action="#">
                                <div className="exchange-content">
                                    <div className="send-banance">
                                        <span className="mdr">Envia</span>
                                        <div className="input-area">
                                            <input className="xxlr" placeholder="400.00" type="number"/>
                                                <select>
                                                    <option value="1">BOB</option>
                                                </select>
                                        </div>
                                        <p>Saldo Disponible<b>30,700.00 BOB</b></p>
                                    </div>
                                    <div className="send-banance recipient">
                                        <span className="mdr">Recibe</span>
                                        <div className="input-area">
                                            <input className="xxlr" placeholder="293.37" type="number"/>
                                                <select>
                                                    <option value="1">BRL</option>
                                                </select>
                                        </div>
                                        <p>Cambio de hoy: <b>1 BOB = 0.73 BRL</b></p>
                                    </div>
                                </div>
                                <div className="pay-option">
                                    <div className="pay-option-single">
                                        <h6>Metodo de Entrega</h6>
                                        <select>
                                            <option value="1">QR con Pix</option>
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
                                            <p>Comision Estimada</p>
                                            <p>+ 5 BOB</p>
                                        </li>
                                        <li>
                                            <p>Tiempo de Transferencia</p>
                                            <p>El Mismo Día</p>
                                        </li>
                                    </ul>
                                    <div className="tatal-pay">
                                        <div className="single">
                                            <h5>Total a Pagar</h5>
                                            <h5>405 BOB</h5>
                                        </div>
                                        <div className="single">
                                            <p>Destinario Recibe</p>
                                            <h5>293.37 BRL</h5>
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