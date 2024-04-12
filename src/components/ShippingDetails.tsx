
const ShippingDetails = () => {
    return (
            <div className="col-xl-5 col-lg-6">
                                    <div className="side-area">
                                        <p>Destinatario Obtiene</p>
                                        <div className="title-area">
                                            <h5>Bank Deposit</h5>
                                            <ul className="flag-area">
                                                <li>
                                                    <span className="icon-area">
                                                        <img src="src/assets/images/icon/flag-bolivia.png" alt="icon" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="icon-area">
                                                        <img src="src/assets/images/icon/brasil.png" alt="icon" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="deposit-details">
                                            <li>
                                                <span>Tú Envias</span>
                                                <b>400.00 BOB</b>
                                            </li>
                                            <li>
                                                <span>Destinatario Recibe</span>
                                                <b>293.37 BRL</b>
                                            </li>
                                            <li>
                                                <span>Cambio de Hoy</span>
                                                <b>1 BOB = 0.73 BRL</b>
                                            </li>
                                            <li>
                                                <span>Nuestra Comision</span>
                                                <b>+5 BOB</b>
                                            </li>
                                        </ul>
                                        <ul className="deposit-details">
                                            <li>
                                                <span>Total a Pagar</span>
                                                <b>405 BOB</b>
                                            </li>
                                            <li>
                                                <span>Destinatario Recibe</span>
                                                <b>293.37 BRL</b>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
    );
};

export default ShippingDetails;