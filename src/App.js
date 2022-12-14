import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this feedback?')){
    setFeedback(feedback.filter((item) => item.id !== id))   
    
  }
  }
  const addFeedback = (data) => {
    data.id = uuidv4()
    setFeedback([...feedback, data])
  }
  return (
    <Router>
    <Header />
    <div className="container">
      <Routes>
      <Route exact path='/' element={
        <>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} 
        handleDelete ={deleteFeedback}/>
        <AboutIconLink/>
        </>
      }>

      </Route>
      <Route path='/about' element={<About/>}/>
      </Routes>
      
    </div>
    </Router>
  )
}

export default App;


