"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

function Education() {

    const [Educations, setEducations] = useState({ page_title: "", education_content: [] });
    const router = useRouter();

    useEffect(() => {
        const getEducationData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/education");

                if (response.status !== 200) {
                    throw new Error("Error getting API connection");
                }

                setEducations(response.data);
                document.title = response.data.page_title;

            } catch (error) {
                console.error("Error getting educations:", error);
                router.push("/error");
            }
        };

        getEducationData();
    }, []);

    const educations = Educations.education_content.map((education, index) => (
        <div className="row" key={index}>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <p>{education.year}</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h3>{education.program}</h3>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <Link className="text-primary align-middle pt-5" href={education.url} target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid mt-3" alt="logo" src={`/images/${education.logo}`} />
                    </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <Header PageName="Education" />
            <div className="container p-5 shadow-lg">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <main>
                            <article>
                                {educations}
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;