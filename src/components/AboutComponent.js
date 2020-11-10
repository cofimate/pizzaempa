import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div class="col col-sm-6">
                    <h3>Our Mission</h3>
                    <p class="d-none d-sm-block">
                        This is a demo site to demostrate functionality and capabilities, you might fall into
                        some "real" request and even payment request, the might go through if you put the correct
                        data the payment might go through. If that is the case please send and email requesting 
                        your reimbursement because there are no real services behind.
                    </p>
                </div>
            </div>
            <div className="row row-content">
                <div class="col-6"> 
                    <p>My son making empanadas</p>
                    <iframe title="frameempa" width="400" height="330" src="https://www.youtube.com/embed/23C4KthSrHM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <p>Our location</p>
                    <iframe title="location1" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7852.5042827186235!2d-118.46771080506473!3d34.15730711285903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s405%20Highway%20and%20101!5e0!3m2!1sen!2sus!4v1601415147958!5m2!1sen!2sus" width="400" height="330" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
}

export default About;