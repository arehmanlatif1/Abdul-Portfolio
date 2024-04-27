import React from 'react'
import Experience from '../../components/Experience/Experience.jsx'
import Education from "../../components/Education/Education.jsx"
import Skills from "../../components/Skills/Skills.jsx"
import Project from "../../components/Projects/Project.jsx"
import "./Home.css"

function Home() {
  return (
    <div>
      <div className='abdul-portfolio'>
        <img src='./public/Icons/ar.jpeg' alt='' />
        <h2>Abdul Rehman</h2>
      </div>
      <section>
        <div>
          <Skills />
        </div>
      </section>
      <section>
        <div>
          <Experience />
        </div>
      </section>
      <section>
        <div>
          <Education />
        </div>
      </section>
      <section>
        <div>
          <Project />
        </div>
      </section>

    </div>
  )
}

export default Home