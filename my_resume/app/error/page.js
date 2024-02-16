import Header from "@/app/components/Header";

const Error = () => {
    return (
        <div>
            <Header PageName="" />
            <div className="container p-5 shadow-lg">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <main>
                            <article>
                                <img className="img-fluid rounded" alt="myPhoto" src="/images/Technical_Difficulties.jpg" />
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;