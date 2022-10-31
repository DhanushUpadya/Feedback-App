
import React from 'react'
import { useState,useContext,useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {



  const [text,setText] = useState('')
  const [rating,setRating] = useState(10)
  const [btnDisabled, setBtnDisbaled] = useState(true)
  const [message, setMessage] = useState('')
  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setBtnDisbaled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])
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

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(text.trim().length>10){
      const newFeedback = {
        text,
        rating,
      }

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }
      else{
        addFeedback(newFeedback);
      }
     
        
      setText('')
    }

  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate the service with us?</h2>
       <RatingSelect select = {(rating) =>setRating(rating)}/>
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
