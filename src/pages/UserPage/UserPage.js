import React, { useState } from 'react';
import './UserPage.css'; // Import CSS for styling
import SideNav from '../../components/SideNav/SideNav';
import Intro from '../../components/IntroSec/IntroSec';
import LearningMaterials from '../../components/LearningMaterials/LearningMaterials';
import UploadDocument from '../../components/UploadDocument/UploadDocument';
import {materialsDataList, onboardingSubmissionList} from '../../data/userData'
import Footer from '../../components/Footer/Footer';

const UserPage = () => {

    const testlink = 'https://www.delldesignsystem.com/';

    const handleSubmitClick = () => {

    }

    const handleRemoveContent = () => {

    }
    console.log(onboardingSubmissionList)

return (
    <section className="userPage">
        <SideNav className="sideBar"/>
        <section className="userPageContent">
            <div className="userfirstSection">
                <Intro
                name="Padi"
                briefText="Your onboarding dashboard awaits! It's packed with everything you need to get started smoothly. Dive in and complete your tasks at your own pace. Excited to have you on board!"
                number="3"
                numberExp="Submission Left"
                />
            </div>
            <div className="usersecondSection">
                <div className="secondSectionTitle">Learning Materials</div>
                <div className="secondSectionContainer">
                    <div className="tableContainerBorder">
                        {materialsDataList.map((item) => (
                            <LearningMaterials
                            materialsText={item.name}
                            accessLink={item.link}
                        />
                        ))}
                    </div>
                    <div className="meetingCard">
                        <div className="meetingCardTitle">
                            Meeting with Manager
                        </div>
                        <div className="meetingCardText">
                            Thursday, 4 April 2024
                        </div>
                        <a href={testlink} className="meetingCardLink">
                            Link to Teams Meeting
                        </a>
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


            <div className="usersecondSection">
                <div className="secondSectionContainer">
                    <div className="useruploadDocument">
                        <div className="secondSectionTitle">Document Submission</div>
                        <button className="uploadDocsButton" onClick={handleSubmitClick} type="button">add submission</button>
                    </div>
                </div>
                <div className="secondSectionContainer">
                    <div className="tableContainerBorder">
                    {onboardingSubmissionList.map((item)=>(
                        <div className="uploadDocumentContainer">
                            <div className="documentName">
                                {item.name}
                            </div>
                            <button className="removeButton" onClick={handleRemoveContent} type="button">
                                remove
                            </button>
                        </div>
                        ))
                        }

                    </div>
                </div>

            </div>

            <Footer />
        </section>

    </section>
);
};

export default UserPage;