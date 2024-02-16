import { BsTelephone, BsEnvelope } from "react-icons/bs";

const Address = () => {
    return (
        <address>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-lg-left text-md-left text-sm-left text-xl-left">
                    <p className="display-4">
                        Frank Lobe
                    </p>
                    <p className="lead">
                        Senior Application Developer & Architect<br />
                    </p>
                    <p className="lead">
                        Creative technology solutions to complex business problems
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="row mb-3">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-left">
                            <BsTelephone className="m-2" />+1 (647) 220-5623
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-left">
                            <BsEnvelope className="m-2" />frank.lobe@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </address>
    );
}

export default Address;