import Navigation from "./Navigation";
import Photo from "./Photo";
import Address from "./Address";
import Links from "./Links";

const Header = ({ PageName }) => {
    return (
        <div className="jumbotron">
            <header>
                <Navigation PageName={PageName} />
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 text-left">
                        <Photo />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12">
                        <Address />
                        <hr />
                        <Links />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;