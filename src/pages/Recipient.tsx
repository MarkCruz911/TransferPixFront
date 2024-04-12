import RecipientPeople from "../components/RecipientPeople";
import ShippingDetails from "../components/ShippingDetails";
import Navbar from "../sidebar/Navbar";

const Recipient = () => {
    const recipientsData = [
        { id: 1, name: "Morris Lucas", email: "morris@example.com", image: "src/assets/images/profile-2.png" },
        { id: 2, name: "Willard Lyons", email: "willard@example.com", image: "src/assets/images/profile-3.png" },
        { id: 3, name: "Willard Lyons", email: "willard@example.com", image: "src/assets/images/profile-3.png" }
    ];

    return (
        <div>
            <div className="preloader" id="preloader"></div>

            <a href="javascript:void(0)" className="scrollToTop"><i className="fas fa-angle-double-up"></i></a>
            <Navbar />
            <section className="dashboard-section body-collapse pay step exchange">
                <div className="overlay pt-120">
                    <div className="container-fruid">
                        <div className="main-content">
                            <div className="head-area d-flex align-items-center justify-content-between">
                                <h4>Datos del Destinatario Brasil</h4>
                                <div className="icon-area">
                                    <img src="src/assets/images/icon/support-icon.png" alt="icon" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="choose-recipient">
                                        <div className="step-area">
                                            <span className="mdr">Paso 1 de 3</span>
                                            <h5>Elige o añade datos del destinatario</h5>
                                        </div>
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item recipient-list" role="presentation">
                                                <button className="nav-link my-recipients active" id="recipients-tab" data-bs-toggle="tab"
                                                    data-bs-target="#recipients" type="button" role="tab" aria-controls="recipients"
                                                    aria-selected="true">
                                                    <span className="icon-area">
                                                        <i className="icon-e-plus"></i>
                                                    </span>
                                                    <span>Añadir Destinatario</span>
                                                </button>
                                            </li>
                                            <li className="nav-item recipient-list" role="presentation">
                                                <button className="nav-link my-recipients" id="recent-tab" data-bs-toggle="tab"
                                                    data-bs-target="#recent" type="button" role="tab" aria-controls="recent"
                                                    aria-selected="false">
                                                    <span className="icon-area">
                                                        <i className="icon-f-user"></i>
                                                    </span>
                                                    <span>Destinatarios Recientes</span>
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="recipients" role="tabpanel" aria-labelledby="recipients-tab">
                                                <div className="section-head">
                                                    <h5>Añadir un nuevo destinatario</h5>
                                                    <p>Esta información debe ser exacta o su transferencia se retrasará.</p>
                                                </div>
                                                <form action="#">
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientsfname">Nombre</label>
                                                                <input type="text" id="recipientsfname" className="pl-2" placeholder="Marco" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientslname">Apellido</label>
                                                                <input type="text" id="recipientslname" className="pl-2" placeholder="Cruz" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientsemail">Email</label>
                                                                <input type="text" id="recipientsemail" placeholder="Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientsphone">Documento</label>
                                                                <div className="select-area d-flex align-items-center">
                                                                    <select>
                                                                        <option value="CI">CI</option>
                                                                        <option value="CPF">CPF</option>
                                                                    </select>
                                                                    <input type="text" id="recipientsphone" className="pl-2" placeholder="Datos Documento" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pay-option-single border-area pb-4">
                                                            <h6 className="pb-1">Bank Transfer Partner</h6>
                                                            <select className="">
                                                                <option value="1">Dutch bangla bank</option>
                                                                <option value="2">Dutch bangla bank</option>
                                                                <option value="3">Dutch bangla bank</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientscuenta">Llave Pix/Cuenta Bancaria</label>
                                                                <div className="select-area d-flex align-items-center">
                                                                    <select>
                                                                        <option value="LlavePix">Llave Pix</option>
                                                                        <option value="CuentaBancaria">Cuenta Bancaria</option>
                                                                    </select>
                                                                    <input type="text" id="recipientscuenta" className="pl-2" placeholder="Digite los Datos" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*
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
                                                        */}
                                                        <div className="col-md-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientsphone">Phone</label>
                                                                <div className="select-area d-flex align-items-center">
                                                                    <select>
                                                                        <option value="+591">+591</option>
                                                                        <option value="+55">+55</option>
                                                                    </select>
                                                                    <input type="text" id="recipientsphone" placeholder="(070) 4567-8800" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                                                <div className="user-select">
                                                    {
                                                        recipientsData.map(recipient=>(
                                                            <RecipientPeople 
                                                            key={recipient.id}
                                                            name={recipient.name}
                                                            email={recipient.email}
                                                            image={recipient.image}
                                                            />
                                                        ))
                                                    }
                                                    
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
                                <ShippingDetails/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Recipient;