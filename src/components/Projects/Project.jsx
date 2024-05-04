import React from 'react';
import "./Project.css";


function Project() {
    return (
      <div className='project-container'>
          <h3 className='tab-header'>
              <span>
                  TECHNICAL PROJECTS
              </span>
          </h3>
  
          <section>
              <div>
                  <h4>Currency Exchange</h4>
                  <p>Utilized an API link to fetch the data. Converted currencies effortlessly on the go with our intuitive currency exchange app, providing real-time rates for seamless global transactions.</p>
              </div>
              <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
              </ul>
          </section>
      </div>
    );
  }
  
  export default Project;
  