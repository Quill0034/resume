import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Education extends React.Component {
    render () {
        return (
            <div className="resume-section" id="education">
            <div className="resume-section-content">
              <ScrollAnimation animateIn="fadeIn">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">Red River College, Winnipeg, MB</h3>
                    <div className="subheading mb-3">Diploma in Business Technology Management</div>
                    <div>main completed course works: Project Management, Business System Design, Business System Testing, Business Requirements Gathering, Project Methodologies, Management Information System, Network Architect, Database Management System, Web Development. </div>
                    <p>GPA: 4.44/4.5</p>
                  </div>
                  <div className="flex-shrink-0"><span className="text-primary">January 2018 – May 2020</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">University of Economics Ho Chi Minh City, Vietnam</h3>
                    <div className="subheading mb-3">Bachelor of Business Administration</div>
                    <p>GPA: 4.0/5.0</p>
                  </div>
                  <div className="flex-shrink-0"><span className="text-primary">August 2013 – June 2017</span></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        );
    }
}
