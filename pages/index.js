import Head from "next/head";

import { useState, useRef, useEffect } from "react";
import Form from "../components/Form";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
    const [cardList, setCardList] = useState([]);
    const translatResultRef = useRef(null);

    const submitHandler = ({ userInput, langList }) => {
        const newCardList = langList.map((lang) => {
            return {
                title: lang["icon"] + lang["label"],
                value: "",
                hasResponse: false
            }
        });
        setCardList(newCardList);

        const promiseList = langList.map((lang, index) => {
            const langName = lang["label"];
            return axios.post('/api/translate', { lang: langName, userInput })
        });
        Promise.all(promiseList)
            .then((responseList) => {
                const newCardList = responseList.map((response, index) => {
                    return {
                        title: langList[index]["icon"] + langList[index]["label"],
                        value: response.data.result,
                        hasResponse: true
                    }
                });
                setCardList(newCardList);
                translatResultRef.current.scrollIntoView({ behavior: 'smooth' });
            })
            .catch(error => {
                console.log(error);
                alert(`${error.message}`);
            });
    };

    const cardListDOM = cardList.map((card, index) => {
        return <Card key={index} title={card.title} value={card.value} hasResponse={card.hasResponse} />
    });

    return (
        <div>
            <Head>
                <title>Open AI Multi Langs Translator</title>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
                <link rel="icon" href="https://enn.design/favicon/favicon.ico" />
            </Head>

            <main>
                <header>
                    <div className="container">
                        <h1>Open AI Multi Langs Translator</h1>
                        <p>記得在根目錄下創建 <span className="file-code">.env</span> 檔案，並寫入 <span className="file-code">OPENAI_API_KEY=你的OPENAI_API_KEY</span>。</p>
                        <ol>
                            <li>輸入您想翻譯的中文內容。</li>
                            <li>點選想翻譯的語言。</li>
                            <li>點擊「開始翻譯」執行翻譯流程。</li>
                        </ol>
                    </div>
                </header>
                <section>
                    <div className="container">
                        <Form onFormSubmit={submitHandler} />
                    </div>
                </section>
                <section ref={translatResultRef}>
                    <div className="container">
                        {cardListDOM}
                    </div>
                </section>
            </main>

            <footer>
                <div className="container">
                    <p>&copy; 2023, developed by <a href="https://enn.design/" target="_blank">Huang An Sheng</a></p>
                </div>
            </footer>
        </div>
    );
}
