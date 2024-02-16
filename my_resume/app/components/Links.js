const Links = () => {
    return (
        <div className="row align-middle">
            <div className="col-xl-1 col-lg-2 col-md-3 col-sm-12">
                <a href="https://www.linkedin.com/in/franklobe/" target="_blank">
                    <img className="img-fluid mt-3" alt="LinkedIn" src="/images/LinkedIn.png" />
                </a>
            </div>
            <div className="col-xl-1 col-lg-2 col-md-3 col-sm-12">
                <a href="https://www.kaggle.com/franklobe" target="_blank">
                    <img className="img-fluid mt-3" alt="Kaggle" src="/images/Kaggle.png" />
                </a>
            </div>
            <div className="col-xl-1 col-lg-2 col-md-3 col-sm-12">
                <a href="https://github.com/FrankLobe/" target="_blank">
                    <img className="img-fluid mt-3" alt="GitHub" src="/images/Github.png" />
                </a>
            </div>
        </div>
    );
}

export default Links;