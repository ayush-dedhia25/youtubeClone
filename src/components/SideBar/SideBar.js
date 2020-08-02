import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHandPeace, faInfoCircle, faKey, faTachometerAlt, faChartBar, faHistory } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sideBar">
      <h3>Hello, Ayush &nbsp;<FontAwesomeIcon icon={faHandPeace} /></h3>
      <div className="divider"></div>
      <Router>
        <Switch>
          <ul className="sideBar_links">
            <Link to="/" className="link_to">
              <li className="sideBar_linkItem">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faHome} /> Home
              </li>
            </Link>
            
            <Link to="/aboutUs" className="link_to">
              <li className="sideBar_linkItem">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faInfoCircle} /> About
              </li>
            </Link>
            
            <Link to="/dashboard" className="link_to">
              <li className="sideBar_linkItem">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faTachometerAlt} /> Dashboard
              </li>
            </Link>
            
            <Link to="/analytics" className="link_to">
              <li className="sideBar_linkItem">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faChartBar} /> Analytics
              </li>
            </Link>
            
            <Link to="/apis" className="link_to">
              <li className="sideBar_linkItem">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faKey} /> APIs
              </li>
            </Link>
            
            <Link to="/history" className="link_to">
              <li className="sideBar_linkItem">
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faHistory} /> History
              </li>
            </Link>
          </ul>
        </Switch>
      </Router>
    </div>
  );
};

export default SideBar;