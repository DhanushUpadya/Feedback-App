import React from 'react'
import Card from '../components/shared/Card'


function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to leave Feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
            <a href='/'>Back to Home Page</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
