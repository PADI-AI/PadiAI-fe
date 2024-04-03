import { useState, useEffect } from "react";
import './ChatBot.css'; // Import CSS for styling
import SideNav from '../../components/SideNav/SideNav';

const ChatBot = () => {
    const [value, setValue] = useState(null);
    const [message, setMessage] = useState(null);
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState(null);

    const createNewChat = () => {
        setMessage(null);
        setValue("");
        setCurrentTitle(null);
    };

    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle);
        setMessage(null);
        setValue("");
    };

    const getMessages = async () => {
        const options = {
            method: "POST",
            body: JSON.stringify({
                message: value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch("http://localhost:1234/chat", options);
            const data = await response.json();
            setMessage(data.choices[0].message);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log(currentTitle, value, message);
        if (!currentTitle && value && message) {
            setCurrentTitle(value);
        }
        if (currentTitle && value && message) {
            setPreviousChats((prevChats) => [
                ...prevChats,
                {
                    title: currentTitle,
                    role: "user",
                    content: value,
                },
                {
                    title: currentTitle,
                    role: message.role,
                    content: message.content,
                },
            ]);
            setValue("");
        }
    }, [message, currentTitle]);

    console.log(previousChats);

    const currentChat = previousChats.filter(
        (previousChat) => previousChat.title === currentTitle
    );
    const uniqueTitles = Array.from(
        new Set(previousChats.map((previousChat) => previousChat.title))
    );
    console.log(uniqueTitles);


return (
    <section className="chatPage">
        <SideNav />
        <section className="chatPageContent">
                {!currentTitle && <h1>CookiesGPT</h1>}
                <ul className="feed">
                    {currentChat?.map((chatMessage, index) => (
                        <li
                            key={index}
                            className={
                                chatMessage.role === "user"
                                    ? "user-message"
                                    : "bot-message"
                            }
                        >
                            <div
                                className={
                                    chatMessage.role === "user"
                                        ? "user-messageans"
                                        : "bot-messageans"
                                }
                            >
                                {chatMessage.content}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="bottom-section">
                    <div className="input-container">
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Message Dellbot"
                        />
                        {value && (
                            <div id="submit" onClick={getMessages}>
                                ➢
                            </div>
                        )}
                    </div>
                </div>
        </section>
    </section>
);
};

export default ChatBot;