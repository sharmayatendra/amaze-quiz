import axios from 'axios'
import "./Question.css"
import { useEffect , useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useQuiz } from '../../context/quiz-context'

const Question = () => {
    const navigate = useNavigate()
    const {state: { quiz , currQuesIndex } , dispatch } = useQuiz()
    const { mcqs } = quiz

    const selectedAns = (selected , ques) => {
      dispatch({
        type: "SELECTED_ANSWERS",
        payload: {
          quizId: quiz._id,
          questionId: ques._id,
          selectedAnswer: selected
        }
      })
      currQuesIndex + 1 !== mcqs.length ? dispatch({ type: "SET_CURRENT_QUESTION_INDEX" , payload: currQuesIndex + 1}) : navigate("/result")
    }
  
  return (
    <>
    <div className="ques-main-container">
    <div className="ques-container">
    <p>Question</p>
    </div>
    <div className="ques-btn-container">
    <h1>{mcqs[currQuesIndex].question}</h1>
    {mcqs[currQuesIndex].options.map(item => <button key={item._id} className="btn btn-primary-outlined option-btn" onClick={() => selectedAns(item._id , mcqs[currQuesIndex])}>{item.option}</button>)}

    </div>
    </div>
    </>
  )
}

export { Question }