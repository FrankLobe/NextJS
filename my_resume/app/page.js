"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header";

function Home() {
  const [pageParagraphs, setPageParagraphs] = useState({ page_title: "", page_content: [] });
  const router = useRouter();

  useEffect(() => {
    const getIndexData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");

        if (response.status !== 200) {
          throw new Error("Error getting API connection");
        }

        setPageParagraphs(response.data);
        document.title = response.data.page_title;

      } catch (error) {
        console.error("Error getting index paragraphs:", error);
        router.push("/error");
      }
    };

    getIndexData();
  }, []);

  const paragraphs = pageParagraphs.page_content.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div>
      <Header PageName="Home" />
      <div className="container p-5 shadow-lg">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <main>
              <article>
                {paragraphs}
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;