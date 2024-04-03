import React, { useState } from 'react';
import './HRPage.css'; // Import CSS for styling
import SideNav from '../../components/SideNav/SideNav';
import Intro from '../../components/IntroSec/IntroSec';
import { hrBasicStats, mockTableList  } from '../../data/HRmockData';
import DownArrow from '../../images/down-arrow.png';
import Footer from '../../components/Footer/Footer';

const HRPage = () => {
    const [activeRow, setActiveRow] = useState([]);

    const toggleRow = (row) => {
        if (activeRow.includes(row)) {
            setActiveRow(activeRow.filter((index) => index !== row));
        } else {
            setActiveRow([...activeRow, row]);
        }
    };

    console.log(mockTableList)
return (
    <section className="hRpage">
        <SideNav className="sideBar" />
        <section className="hrPageContent">
            <div className="hrfirstSection">
                <Intro
                    name="HR"
                    briefText="This HR dashboard is meant to oversee the onboarding process for all manager's team"
                />
            </div>

            {/* basic stats for HR */}
            <div className="statsContainer">
                {hrBasicStats.map((item)=>(
                    <div key={item.id} className="statsItem">
                        <span className="statsNumber">
                            {item.number}
                        </span>
                        <span className="statsDesc">
                            {item.desc}
                        </span>
                    </div>
                ))}
            </div>

            {/* HR table */}
            <div className="hrtableSection">
                <div className="hrtableTitle">
                    Onboarding Table
                </div>
                <div className="hrtableContainer">
                    {mockTableList.map((item, index)=>(
                        <div key={item.id} className="accordionItemHolder">
                            <button
                                type="button"
                                className={`tableItemButton ${activeRow === index ? 'active' : ''}`}
                                onClick={() => toggleRow(index)}
                            >
                                <span className="tableItemTitle">
                                    {item.manager}
                                </span>
                                <img src={DownArrow} className="downArrow" alt="downArrow"/>
                            </button>
                            <div
                                className={`accordionContent ${
                                activeRow.includes(index) ? 'expanded' : ''
                                }`}
                            >
                                <div className="hronboardingtable">
                                    <span className="hronboardingtitle">Name</span>
                                    <span className="hronboardingtitle">Mentor</span>
                                    <span className="hronboardingtitle">Quiz</span>
                                    <span className="hronboardingtitler">Submitted Document</span>
                                    <span className="hronboardingtitler">Materials to complete</span>
                                </div>
                                <div className="hrtableitemcontentholder">
                                    {item.hrdata.map((item)=>(
                                        <div key={item.id} className="hrtableitemcontent">
                                            <span className="onboardingitemtitle">{item.name}</span>
                                            <span className="onboardingitemtitle">{item.mentor}</span>
                                            <span className="onboardingitemtitle">{item.quiz}</span>
                                            <span className="onboardingitemnumber">{item.submitDocs}</span>
                                            <span className="onboardingitemnumber">{item.docstoComplete}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </section>
    </section>
);
};

export default HRPage;