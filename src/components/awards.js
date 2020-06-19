import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Awards extends React.Component {
    render () {
        return (
            <div className="resume-section" id="awards">
                <div className="resume-section-content">
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 className="mb-5 text-danger">Awards &amp; Certifications</h2>
                        <ul className="fa-ul mb-0">
                            <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>Academic Achievement Award for First-Year Students
                            </li>
                            <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>Dean's honour roll - term 1 + 2 + 3 + 4
                            </li>
                            <li>
                            <span className="fa-li"><i className="fas fa-certificate text-warning" /></span>Selenium Essential Training
                            </li>
                            <li>
                            <span className="fa-li"><i className="fas fa-certificate text-warning" /></span>End-to-end Javascript Testing with Cypress.io
                            </li>
                        </ul>
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}
