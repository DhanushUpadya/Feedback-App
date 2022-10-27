import React from 'react'
import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {

  const [text,setText] = useState('')
  
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate the service with us?</h2>
        {/* Rating select component */}
        <div className="input-group">
          <input type="text" onChange={handleOnChange} placeholder='Please write a review'  value={text} />
          <Button type="submit">
            Send
            </Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
