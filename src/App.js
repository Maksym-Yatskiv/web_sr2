import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContentBlock from "./components/ContentBlock";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/data/content.json")
            .then((r) => r.json())
            .then((j) => setData(j))
            .catch((e) => {
                console.error("Failed to load data:", e);
            });
    }, []);

    return (
        <div>
            <Header siteTitle={data?.siteTitle}  />
            <div className="container layout">
                <Sidebar menu={data?.menu || []}> </Sidebar>

                <div className="main-card">
                    <ContentBlock
                    data={{
                        title: data?.main?.title,
                            lead: data?.main?.lead,
                            paragraphs: data?.main?.paragraphs || [],
                            extra: data?.extraSection,
                    }}
                    />
                    <Footer social={data?.footer?.social || []} />
                </div>
            </div>
        </div>
    );
}

