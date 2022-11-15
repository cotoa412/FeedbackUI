import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'


const FeedbackList = ({ feedback, handleDelete}) => {
  
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }


    return (
        <div className='feedback-list'>
             
            {feedback.map((feedback) => (
                <motion.div
                    key={feedback.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    layout
                     >
            <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
                </motion.div>
            ))}
            
        </div>
      )

//     return (
//     <div className='feedback-list'>
//         {feedback.map((feedback, index) =>         
//         <FeedbackItem key={index} feedback={feedback} handleDelete={handleDelete} />
//         )}

//     </div>
//   )
}

export default FeedbackList
