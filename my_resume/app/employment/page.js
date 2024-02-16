"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

function Employment() {

    const [Employments, setEmployments] = useState({ page_title: "", employment_content: [] });
    const router = useRouter();

    useEffect(() => {
        const getEmploymentData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/employment");

                if (response.status !== 200) {
                    throw new Error("Error getting API connection");
                }

                setEmployments(response.data);
                document.title = response.data.page_title;

            } catch (error) {
                console.error("Error getting employments:", error);
                router.push("/error");
            }
        };

        getEmploymentData();
    }, []);

    const employments = Employments.employment_content.map((employment, index) => (
        <div key={index}>
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <p>{employment.date_range}</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h3>
                                {employment.title}
                            </h3>
                        </div>
                    </div>
                    {employment.url !== "" ? (
                        <div className="row">
                            <div className="lead mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <Link className="text-primary align-middle" href={employment.url} target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid mt-3" alt="logo" src={`/images/${employment.logo}`} />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="lead mb-2 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <img className="img-fluid mt-3" alt="logo" src={`/images/${employment.logo}`} />
                            </div>
                        </div>
                    )}
                    {employment.telephone !== "" && (
                        <address>
                            <div className="row">
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 font-weight-bold text-lg-right text-md-right text-sm-left text-xl-right">
                                    <p>
                                        {employment.telephone}
                                    </p>
                                </div>
                            </div>
                        </address>
                    )}
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <ul className="list-group">
                                {employment.employment_points.map((employment_point, index) => (
                                    <li key={index} className="list-group-item">{employment_point}</li>
                                ))}
                            </ul>
                            {employment.attachment !== "" && (
                                <div>
                                    <br />
                                    <p>
                                    <a className="lead text-secondary" href={`/documents/${employment.attachment}`} target="_blank" rel="noopener noreferrer">
                                            {employment.attachment_description}
                                        </a>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    ));

    return (
        <div>
            <Header PageName="Employment" />
            <div className="container p-5 shadow-lg">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <main>
                            <article>
                                {employments}
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employment;