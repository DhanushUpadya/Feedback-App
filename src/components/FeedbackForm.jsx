import React from 'react'
import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {

  const [text,setText] = useState('')

  const [btnDisabled, setBtnDisbaled] = useState(true)
  const [message, setMessage] = useState('')
  
  const handleOnChange = (event) =>{
    if(text === ''){
      setBtnDisbaled(true)
      setMessage(null)

    }

    else if(text !== '' && text.trim().length <=10){
      setMessage("Text must be at least 10 characters")
      setBtnDisbaled(true)
    }
    else{
      setMessage(null)
      setBtnDisbaled(false)
    }
    setText(event.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate the service with us?</h2>
        {/* Rating select component */}
        <div className="input-group">
          <input type="text" onChange={handleOnChange} placeholder='Please write a review'  value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
            </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
