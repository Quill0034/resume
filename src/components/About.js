/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default class NavBar extends React.Component {
    render () {
        return (
        <div className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">Quy <span className="text-primary">Tran</span></h1>
                <div className="subheading mb-5">Winnipeg, Manitoba · (431) 336-4395 · <a href="mailto:quyhoangtran0034@gmail.com">quyhoangtran0034@gmail.com</a></div>
                    <p className="lead mb-5">I am experienced in working in software development projects and have a strong passion about software testing and system analyst.</p>
                <div className="social-icons">
                <a className="social-icon" href="#"><i className="fab fa-linkedin-in" /></a><a className="social-icon" href="#"><i className="fab fa-github" /></a><a className="social-icon" href="#"><i className="fab fa-twitter" /></a><a className="social-icon" href="#"><i className="fab fa-facebook-f" /></a>
                </div>
            </div>
        </div>
        );
    }
}