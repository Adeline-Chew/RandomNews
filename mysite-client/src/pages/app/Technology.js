import React, { useState } from "react";
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
import Navbar from "../../../src/components/NavBar/Navbar";

const Technology = () => {
    const [news, setNews] = useState("");
    const [article, setArticle] = useState(false);
    const [num, setNum] = useState(0);

    // Display news function, set the variable news to the values of articles
    const displayNews = () => {
        console.log("Clicked!");

        fetch("http://127.0.0.1:8000/news_api/tech", {
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
                console.log("Length of JSON: " + Object.keys(data).length);
                setNum(Math.floor(Math.random() * Object.keys(data).length));
                console.log("Counter: " + num);
            });
    };
    return (
        <>
            <Navbar />
            <Container>
                <DashboardTitle>Here's Some Tech News For You</DashboardTitle>

                <NewsButton onClick={displayNews}>
                    Get Random Article
                </NewsButton>
                <NewsWrapper>
                    {article === true && (
                        <NewsCard>
                            {news[num].image_url !== null && (
                                <ImgWrap>
                                    <NewsImg src={news[num].image_url} />
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
        </>
    );
};

export default Technology;
