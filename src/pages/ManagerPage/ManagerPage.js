import React, { useState } from 'react';
import './ManagerPage.css'; // Import CSS for styling
import SideNav from '../../components/SideNav/SideNav';
import Intro from '../../components/IntroSec/IntroSec';
import {meetingScheduleData, teamMaterialData, onboardingteamData} from '../../data/managerData';
import Footer from '../../components/Footer/Footer';

const ManagerPage = () => {
    const testlink = 'https://www.delldesignsystem.com/';
    const handleSubmitClick = () => {

    }
    const handleRemoveContent = () => {

    }

    console.log()
return (
    <section className="managerPage">
        <SideNav className="sideBar" />
        <section className="managerPageContent">
            <div className="managerfirstSection">
                <Intro
                name="Manager"
                briefText="Your manager onboarding dashboard awaits! It's packed with everything you need to get started smoothly."
                number="4"
                numberExp="New Hires"
                />
            </div>

            <div className="oneTooneSectionContainer">
                <div className="oneTooneSection">
                    <div className="oneTooneSectionHeader">
                        <div className="oneToOneTitle">
                            One-to-One Meeting Schedule
                        </div>
                        <button className="addScheduleButton" onClick={handleSubmitClick} type="button">add schedule</button>
                    </div>
                    <div className="scheduledetailsContainer">
                        {meetingScheduleData.map((item) => (
                            <div className="oneTooneSectionHeader">
                                <div className="meetingSchedule">
                                {item.date}
                                </div>
                                <a href={item.link} className="meetingCardLink">
                                Link to Teams Meeting
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* onboarding table */}
            <div className="managersecondSection">
                <div className="secondSectionTitle">
                    My Team Onboarding
                </div>
                <div>
                    <div className="teamonboardingtable">
                        <span className="comparisontitle">Name</span>
                        <span className="comparisontitle">Mentor</span>
                        <span className="comparisontitle">One-to-one meeting</span>
                        <span className="comparisontitleNumber">Materials to complete</span>
                    </div>
                    <div className="tableSpacing">
                        {onboardingteamData.map((item)=>(
                            <div key={item.id} className="teamonboardingtableContent">
                                <span className="comparisontext">{item.name}</span>
                                <span className="comparisontext">{item.Mentor}</span>
                                <span className="comparisontext">{item.meetinstatus}</span>
                                <span className="comparisontitleNumber">{item.materialToComplete}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* onboarding materials */}
            <div className="managersecondSection">
                <div className="secondSectionContainer">
                    <div className="useruploadDocument">
                        <div className="secondSectionTitle">My Team Onboarding Materials</div>
                        <button className="uploadDocsButton" onClick={handleSubmitClick} type="button">add submission</button>
                    </div>
                </div>
                <div className="secondSectionContainer">
                    <div className="tableContainerBorder">
                    { teamMaterialData.map((item)=>(
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

export default ManagerPage;