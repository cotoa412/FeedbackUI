import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'


const FeedbackItem = ({feedback, handleDelete}) => {


    
    return (
    <Card reverse = {true}>
        <div className="num-display">{feedback.rating}</div>
        <button onClick={() => handleDelete(feedback.id)} className="close" > <FaTimes color = 'pink'/></button>
      <div className="text-display">
        {feedback.text}
      </div>
    </Card>
  )
}

export default FeedbackItem
