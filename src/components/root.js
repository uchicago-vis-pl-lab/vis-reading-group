import React from 'react';
import Clock from './clock';
import {history, quarterInfo} from './constants';

class RootApp extends React.Component {
  render() {
    const quarters = history.reduce((acc, row) => {
      if (!acc[row.quarter]) {
        acc[row.quarter] = [];
      }
      acc[row.quarter].push(row);
      return acc;
    }, {});
    return (
      <div className="flex-down center margin-top main-content">
        <div className="flex margin-top">
          <Clock />
          <div className="flex-down title-section">
            <h1>UChicago Visualization Research Reading Group</h1>
          </div>
        </div>
        <div>
          <p>
            The UChicago Visualization Research reading group is an opportunity to explore the big and wonderful world of visualization research. Through this casual lunch+learn discussion group we hope to provide a palatable and pleasant trawl through the big questions in the field of visualization. We are generally focused on infovis papers, but we are open to all in the land of vis. All are welcome, food will be provided.
          </p>
          <p>
            To suggest a paper file a github issue <a href="https://github.com/uchicago-vis-pl-lab/vis-reading-group/issues">here</a>.
          </p>
        </div>
        <div>
          <h2 className="section-title">Schedule + History</h2>
          <div className="margin-top">
            {
              Object.entries(quarters).map(([quarter, readings]) => {
                const {time, location} = quarterInfo[quarter];
                return (<div key={quarter}>
                  <h3>{quarter}</h3>
                  <h5>{`${location} - ${time}`}</h5>
                  {readings.map(({date, paper, authors, venue, link, presenter}, idx) => {
                    return (<div className="flex-down margin-bottom" key={idx}>
                      <div><a href={link}>{paper}</a></div>
                      <div><span>{`${venue} - ${authors}`}</span></div>
                      <div>{`Date Read: ${date} - Discussion by ${presenter}`}</div>
                    </div>);
                  })}
                </div>);
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
RootApp.displayName = 'App';
export default RootApp;
