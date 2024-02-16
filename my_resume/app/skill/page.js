"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

function Skill() {
    const [skills, setSkills] = useState({
        page_title: "",
        "All": [],
        "Machine Learning Engineering": [],
        "Progress OpenEdge 4GL/ABL Application Development": [],
        "Website Development": []
    });
    const router = useRouter();

    useEffect(() => {
        const getSkillData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/skill');

                if (response.status !== 200) {
                    throw new Error('Error getting API connection');
                }

                setSkills(response.data);
                document.title = response.data.page_title;

            } catch (error) {
                console.error('Error getting skills:', error);
                router.push("/error");
            }
        };

        getSkillData();
    }, []);

    const Skills = (skillsCategory) => {
        return skills[skillsCategory].map((skill, index) => (
            <span key={index} className="badge rounded-pill bg-primary col-xl-3 col-lg-3 col-md-5 col-sm-5 m-2 p-2">{skill}</span>
        ));
    };

    const getSkillCategory = () => {

        let skillCategory = "All";
        const contact = JSON.parse(localStorage.getItem('contact'));

        if (contact) {
            skillCategory = contact.jobType;
        }

        return skillCategory;
    };

    return (
        <div>
            <Header PageName="Skill" />
            <div className="container p-5 shadow-lg">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <main>
                            <article>
                                {Skills(getSkillCategory())}
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;