import React from 'react'
import './style.css'
import {FaBuilding} from 'react-icons/fa'
 function WorkExp() {
    return (
        <div className="workExp">
            <h2><FaBuilding className="icons"/>Work Experience</h2>
            <h3>Senior Front End Developer, IAG</h3>
<p className="date">08/2016 - Present </p>
<p>
I am currently working as a senior front end developer on IAG's Chroma Design System team, however as there are only two developers on the team we have also been required to setup CI/CD workflows in Circle CI/Github Actions as well as hosting environments in AWS. I have had experience setting up deployments to S3 via the AWS CLI from Github Actions and setting up CloudFront, Route 53 and simple Lambda functions. I have also been responsible for creating and maintaining components both in our Core product which is html/scss and our React npm package which is consumed by the app development teams and setting up testing and documentation across the design system. I have had experience working on multiple applications at IAG that have been built or are being built using React/Redux running on top of a Node Express Server and interfacing with an API backend architecture to access the various IAG systems. We are always striving to increase the quality of our projects with good test coverage and code reviews.
</p>
        </div>
    )
}
export default WorkExp;