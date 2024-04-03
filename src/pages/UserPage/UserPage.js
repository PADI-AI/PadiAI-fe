import React, { useState, useEffect } from 'react';
import "./UserPage.css"; // Import CSS for styling
import SideNav from "../../components/SideNav/SideNav";
import Intro from "../../components/IntroSec/IntroSec";
import LearningMaterials from "../../components/LearningMaterials/LearningMaterials";
import UploadDocument from "../../components/UploadDocument/UploadDocument";
import {
    materialsDataList,
    onboardingSubmissionList,
} from "../../data/userData";
import Footer from "../../components/Footer/Footer";
import DownArrow from "../../images/down-arrow.png";
import { useNavigate, Link } from "react-router-dom";
import { managerAPI } from '../../API';

const UserPage = () => {

    const [uSerPageData, setuSerPageData] = useState();
    const [error, setError] = useState(null);

    const testlink = 'https://www.delldesignsystem.com/';

    const[isQuizTaken, setQuizTaken] = useState(true);
    const navigate = useNavigate();

    const handleSubmitClick = () => {};

    const handleRemoveContent = () => {};
    const [activeRow, setActiveRow] = useState([]);

    const toggleRow = (row) => {
        if (activeRow.includes(row)) {
            setActiveRow(activeRow.filter((index) => index !== row));
        } else {
            setActiveRow([...activeRow, row]);
        }
    };
    const handleClick = () => {
        navigate("/start-quiz");
    };
    const fetchUserPageData = async () => {
        const fetchUserResult = await managerAPI();
        if (fetchUserResult.status === 200) {
            setuSerPageData(fetchUserResult.data.data);
            // console.log(fetchUserResult.data.data);
        } else {
          setError(fetchUserResult);
        //   console.log(fetchUserResult);
        }
      };
      useEffect(() => {
        fetchUserPageData();
        window.scrollTo(0, 0);
      }, []);
      if (error) {
        // Print errors if any
        return (
          <div>
            There's an Error
          </div>
        );
      }
      console.log(uSerPageData[0].attributes)

    return (
        <section className="userPage">
            <SideNav className="sideBar" />
            <section className="userPageContent">
                <div className="userfirstSection">
                    <Intro
                        name={uSerPageData[0].attributes.newHire[0].memberName}
                        briefText="Your onboarding dashboard awaits! It's packed with everything you need to get started smoothly. Dive in and complete your tasks at your own pace. Excited to have you on board!"
                    />
                    <div className="button-container">
                        <button
                            className={`go-to-quiz ${
                                isQuizTaken ? "active" : ""
                            }`}
                            onClick={handleClick}
                            type="button"
                        >
                            Take Pre-Tests
                        </button>
                    </div>
                </div>
                <div
                    className={`usersecondSection ${
                        isQuizTaken ? "active" : ""
                    }`}
                >
                    <div className="secondSectionTitle">
                        Recommended Schedule
                    </div>
                    <div className="secondSectionContainer">
                        <div className="tableContainerBorder">
                            {materialsDataList.map((item, index) => (
                                <section className="accordionItemHolder">
                                    <button
                                        type="button"
                                        className={`tableItemButton ${
                                            activeRow === index ? "active" : ""
                                        }`}
                                        onClick={() => toggleRow(index)}
                                    >
                                        <span className="tableItemTitle">
                                            {item.week}
                                        </span>
                                        <img
                                            src={DownArrow}
                                            className="downArrow"
                                            alt="downArrow"
                                        />
                                    </button>
                                    <div
                                        className={`accordionContent ${
                                            activeRow.includes(index)
                                                ? "expanded"
                                                : ""
                                        }`}
                                    >
                                        {item.details.map((item) => (
                                            <LearningMaterials
                                                materialsText={item.name}
                                                accessLink={item.link}
                                            />
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
                {/* {onboardingSubmissionList.map((item) => (
                <UploadDocument
                uploadDocsTitle="Onboarding Submission"
                uploadDocsName={item.name}
                />
            ))} */}

                {/* <UploadDocument
            uploadDocsTitle="Onboarding Submission"
            uploadDocsName={onboardingSubmissionList}
            /> */}

                <div className="userthirdSection">
                    <div className="secondSectionContainer">
                        <div className="useruploadDocument">
                            <div className="secondSectionTitle">
                                Document Submission
                            </div>
                            <button
                                className="uploadDocsButton"
                                onClick={handleSubmitClick}
                                type="button"
                            >
                                add submission
                            </button>
                        </div>
                    </div>
                    <div className="secondSectionContainer">
                        <div className="tableContainerBorder">
                            {onboardingSubmissionList.map((item) => (
                                <div className="uploadDocumentContainer">
                                    <div className="documentName">
                                        {item.name}
                                    </div>
                                    <button
                                        className="removeButton"
                                        onClick={handleRemoveContent}
                                        type="button"
                                    >
                                        remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="userthirdSection">
                    <div className="secondSectionContainer">
                        <div className="useruploadDocument">
                            <div className="secondSectionTitle">
                                Chat Bot Integration
                            </div>
                            <button
                                className="uploadDocsButton"
                                onClick={handleSubmitClick}
                                type="button"
                            >
                                Start Talking
                            </button>
                        </div>
                    </div>
                    <div className="secondSectionContainer">
                        <div className="tableContainerBorder">
                            <div className="supportText">
                                I'm am context aware. I'll do my best to help
                                you with:
                            </div>
                            <div className="contextContainer">
                                <span className="listdocumentName">Python</span>
                                <span className="listdocumentName">React</span>
                                <span className="listdocumentName">Angular</span>
                                <span className="listdocumentName">.NET</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        </section>
    );
};

export default UserPage;
