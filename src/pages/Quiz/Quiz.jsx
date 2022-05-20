import axios from 'axios';
import React , { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from '../../components/Nav/Nav'
import { Question } from '../../components/Question/Question';
import { Rules } from '../../components/Rules/Rules';
import { useQuiz } from '../../context/quiz-context';

const Quiz = () => {
    const {dispatch } = useQuiz()
    const [showRules,setShowRules] = useState(true)
    const {quizId} = useParams()

    useEffect(() => {
        (async () => {
            const resp = await axios.get(`/api/quizzes/${quizId}`)
            dispatch({type: "INITIAL_QUIZ" , payload: resp.data.quiz})
        })()
    },[])
  return (
    <>
    <Nav />
    {showRules ? <Rules setShowRules={setShowRules}/> : <Question />}
    </>
  )
}

export { Quiz }