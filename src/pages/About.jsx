import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>This is a React App to leave feedback</p>
        <p>Version 1.0.0</p>

        <Link to='/'>Back to home</Link>
      </div>
    </Card>
  )
}

export default About
