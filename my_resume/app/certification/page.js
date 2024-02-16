"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

function Certification() {

    const [Certifications, setCertifications] = useState({ page_title: "",certification_content: [] });
    const router = useRouter();

    useEffect(() => {
        const getCertificationData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/certification");

                if (response.status !== 200) {
                    throw new Error("Error getting API connection");
                }

                setCertifications(response.data);
                document.title = response.data.page_title;

            } catch (error) {
                console.error("Error getting certifications:", error);
                router.push("/error");
            }
        };

        getCertificationData();
    }, []);

    const certifications = Certifications.certification_content.map((certification, index) => (
        <div key={index} className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        {certification.year}
                    </div>
                </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <p className="h4">{certification.certification_institution}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <p className="lead">{certification.certification_description}
                            {certification.url !== "" && (
                                <Link href={certification.url} target="_blank" rel="noopener noreferrer">
                                    <BsBoxArrowUpRight className="m-3" />
                                </Link>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <Header PageName="Certification" />
            <div className="container p-5 shadow-lg">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <main>
                            <article>
                                {certifications}
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certification;