"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

function Experience() {

    const [Experiences, setExperiences] = useState({ page_title: "", experience_content: [] });
    const router = useRouter();

    useEffect(() => {
        const getExperienceData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/experience");

                if (response.status !== 200) {
                    throw new Error("Error getting API connection");
                }

                setExperiences(response.data);
                document.title = response.data.page_title;

            } catch (error) {
                console.error("Error getting experiences:", error);
                router.push("/error");
            }
        };

        getExperienceData();
    }, []);

    const experiences = Experiences.experience_content.map((experience, index) => (
        <div key={index}>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h3>
                                {experience.experience_description}
                                {experience.url !== "" && (
                                    <Link className="lead" href={experience.url} target="_blank" rel="noopener noreferrer">
                                        <BsBoxArrowUpRight className="m-3" />
                                    </Link>
                                )}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            {experience.experience_paragraphs.map((experience_paragraph, index) => (
                                    <p key={index}>{experience_paragraph}</p>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    ));

    return (
        <div>
            <Header PageName="Experience" />
            <div className="container p-5 shadow-lg">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <main>
                            <article>
                                {experiences}
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;