import React from 'react';
import SearchResults from '../SearchResults/SearchResults.react';


const DashboardContainer = () => {

    return (
        <div className='dashboardcontainer_wrapper'>
            <div className="item">
                <a className="ui tiny image">
                    <img src="../../logo.svg" alt="Agent"/>
                </a>
                <div className="middle aligned content">
                    <div className="header">
                        Agent Name
                    </div>
                </div>
            </div>
            <SearchResults></SearchResults>
        </div>
    );

}

export default DashboardContainer;