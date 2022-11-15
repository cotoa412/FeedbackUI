import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)

    const [btnDisable,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    
    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if( text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
  }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback ={
                text: text,
                rating: rating

            }
            handleAdd(newFeedback)
            setText('')
            
        }}
  
    return (
    <Card reverse={true}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating}/>
        <div className="input-group">
            <input 
            onChange={handleTextChange} 
            type="text" 
            placeholder='Write a review'
            value ={text} 
            style ={{backgroundColor:'transparent', color:'white'}} 
            />

            <Button type="submit" version={'secondary'} isDisabled={btnDisable}>Send</Button>
        </div>
        {message && <div className="message">{message}</div> }

      </form>
    </Card>
  )
}

export default FeedbackForm
