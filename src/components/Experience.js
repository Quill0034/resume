import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Experience extends React.Component {
    render () {
        return (
            <div className="resume-section" id="experience">
            <div className="resume-section-content">
              <ScrollAnimation animateIn="fadeIn">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">Business Analyst - Software Tester - UX designer</h3>
                    <div className="subheading mb-3">Equal Opportunities West - Ace Project Space</div>
                    <p>Developed a full-stack application for staff management system</p>
                    <ul className="fa-ul mb-0">
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Established and understood user requirements for development project
                      </li>
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Compiled accurate test plans, test data, test cases including expected results
                      </li>
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Performed end-to-end automated testing using Cypress
                      </li>
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Participated in the implementation and version control for all changes using Git and GitKraken to coordinate works with teammates
                      </li>
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Designed an application using Bootstrap 4 CSS framework
                      </li>
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Utilized Kanban board to manage and monitor tasks
                      </li>
                  </ul>
                  </div>
                  <div className="flex-shrink-0"><span className="text-primary">Apr 2019 – Aug 2019</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">Line Cook</h3>
                    <div className="subheading mb-3">Garbonzos Pizza - Canad Inns</div>
                    <ul className="fa-ul mb-0">
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Collaborated with co-workers to get orders done quickly and effectively
                      </li>
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Followed instructions from the head chef to cook specified portions of food items
                      </li>
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Maintained inventory of food and supplies
                      </li>
                      <li>
                      <span className="fa-li"><i className="fas fa-check" /></span>Cleaned and sanitized work area and equipment following health and safety standards
                      </li>
                  </ul>
                  </div>
                  <div className="flex-shrink-0"><span className="text-primary">Aug 2019 – May 2020</span></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        );
    }
}
