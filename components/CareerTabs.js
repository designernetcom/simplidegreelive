"use client"
import { useState } from "react";

const CareerTabs = () => {
  const [activeTab, setActiveTab] = useState("Sales & Marketing");

  const tabs = ["Sales & Marketing", "Human Resources", "Digital Marketing"];

  const content = {
    "Sales & Marketing": (
      <div className="CareerJobsSection_Career_tab__card__zjB0v">
        <h2 className="CareerJobsSection_Career_tab_cards__heading__A4ApS">
          Business Development Executive (Fresher and Experience)
        </h2>
        <p className="CareerJobsSection_Career_tab_cards__para__cFHlA">
          Business development executives are responsible for driving company
          sales by sourcing new clients, and by convincing existing clients to
          purchase added offerings.
        </p>
        <button className="CareerJobsSection_Career_tab_cards__button__pow9z">
          Apply Now
        </button>
      </div>
    ),
    "Human Resources": (
      <div className="CareerJobsSection_Career_tab__card__zjB0v">
        <h2 className="CareerJobsSection_Career_tab_cards__heading__A4ApS">
          HR Executive
        </h2>
        <p className="CareerJobsSection_Career_tab_cards__para__cFHlA">
          Responsible for recruitment, employee relations, and training.
        </p>
        <button className="CareerJobsSection_Career_tab_cards__button__pow9z">
          Apply Now
        </button>
      </div>
    ),
    "Digital Marketing": (
      <div className="CareerJobsSection_Career_tab__card__zjB0v">
        <h2 className="CareerJobsSection_Career_tab_cards__heading__A4ApS">
          Digital Marketing Specialist
        </h2>
        <p className="CareerJobsSection_Career_tab_cards__para__cFHlA">
          Create marketing campaigns, manage social media, and optimize SEO
          strategies.
        </p>
        <button className="CareerJobsSection_Career_tab_cards__button__pow9z">
          Apply Now
        </button>
      </div>
    ),
  };

  return (
    <div className="CareerTabSection_Career_tab__row2__9hq_6">
      <div className="CareerTabSection_Career_tab__column2__3ozxT">
        <div>
          <div>
            <div className="CareerJobsSection_bloc_tabs__ArH8E">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={
                    activeTab === tab
                      ? "CareerJobsSection_active_tabs__QfJTG"
                      : "CareerJobsSection_tabs__cWwNR"
                  }
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div>
              <div className="CareerJobsSection_active_content__tUia3">
                {content[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTabs;
