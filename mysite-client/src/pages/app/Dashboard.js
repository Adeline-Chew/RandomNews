import React, { useState, useEffect, Fragment } from "react";
import {
    Container,
    DashboardTitle,
    ImgWrap,
    NewsButton,
    NewsCard,
    NewsImg,
    NewsP,
    NewsTitle,
    NewsWrapper,
} from "./DashboardElem";
import { Button } from "react-bootstrap";
import Navbar from '../../../src/components/NavBar/Navbar'

const Dashboard = () => {
    const [userEmail, setUserEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState("");
    const [article, setArticle] = useState(false);
    const [num, setNum] = useState(0);
    // var num = 1;

    // Use effect to replace with the login page if the user is not logged in
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            window.location.replace("http://localhost:3000/login");
        } else {
            fetch("http://127.0.0.1:8000/api/authuser/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setUserEmail(data.email);
                    setLoading(false);
                });
        }
    }, []);

    // Display news function, set the variable news to the values of articles
    const displayNews = () => {
        console.log("Clicked!");
        
        
        fetch("http://127.0.0.1:8000/news_api/view", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setNews(data);
                console.log(data);
                setArticle(true);
                console.log("Length of JSON: " + Object.keys(data).length)
                setNum(Math.floor(Math.random() * Object.keys(data).length));
                console.log("Counter: " + num);
            });
    };

    return (
        <>
            <Navbar />
            {loading === false && (
                <Container>
                    <DashboardTitle>Welcome Back!</DashboardTitle>

                    <NewsButton onClick={displayNews}>
                        Get Random Article
                    </NewsButton>
                    <NewsWrapper>
                        {article === true && (
                            <NewsCard>
                                {news[num].image_url !== null && (
                                  <ImgWrap>
                                    <NewsImg
                                        src={news[num].image_url}
                                    />
                                    </ImgWrap>
                                )}
                                <NewsTitle>{news[num].title}</NewsTitle>
                                <NewsP>{news[num].description}</NewsP>
                                <Button
                                    variant="primary"
                                    href={news[num].link}
                                    target="_blank"
                                >
                                    View this article
                                </Button>
                            </NewsCard>
                        )}
                    </NewsWrapper>
                </Container>
            )}
        </>
    );
};

export default Dashboard;
