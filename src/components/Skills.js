import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Skills extends React.Component {
    render () {
        return (
            <div className="resume-section" id="skills">
                <div className="resume-section-content">
                    <ScrollAnimation animateIn="fadeIn">
                    <h2 className="mb-5 text-danger">Skills</h2>
                    <div className="subheading mb-3 text-info">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5" /></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
                        <li className="list-inline-item"><i className="fab fa-react" /></li>
                        <li className="list-inline-item"><i className="fab fa-node-js" /></li>
                        <li className="list-inline-item"><i className="fab fa-wordpress" /></li>
                        <li className="list-inline-item"><i className="fab fa-npm" /></li>
                        <li className="list-inline-item"><i className="fab fa-java" /></li>
                    </ul>
                    <p>Selenium, Cypress, Jest, HTML, CSS, Java, Javascript, ReactJs, NodeJs, MongoDB, Oracle SQL, Office 365, </p>
                    <div className="subheading mb-3 text-info">Core Skills</div>
                    <ul className="fa-ul mb-0">
                        <li>
                        <span className="fa-li"><i className="fas fa-check" /></span>Analytical skills: Analyzed customers requirements and proposed possible solutions
                        </li>
                        <li>
                        <span className="fa-li"><i className="fas fa-check" /></span>Teamwork and project management: Collaborate well with teammates and be a team leader in many class projects and assignments
                        </li>
                        <li>
                        <span className="fa-li"><i className="fas fa-check" /></span>Customer focus: Performed excellent customer service during previous jobs and got good feedback from customers
                        </li>
                        <li>
                        <span className="fa-li"><i className="fas fa-check" /></span>Time management skills: Planed, scheduled and controlled my timetable during my study and work to meet task deadlines.
                        </li>
                    </ul>
                </ScrollAnimation>
                </div>
            </div>
        );
    }
}
