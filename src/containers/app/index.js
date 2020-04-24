import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import quiz from './data.json'
import Home from '../home'
import QuestionForm from './../about/questionForm'
import ResultForm from './../result/resultForm'
import './app.css'
import { Route, Link } from 'react-router-dom'
import { history } from './../../store'

function App(props) {
  const [fullName, setFullName] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  var obj = JSON.parse(JSON.stringify(quiz))

  //handling Form
  const handleValueForm = fullName => {
    console.log('form submit', fullName)
    setFullName(fullName)
  }

  //Handling Question
  const onNextQuestion = () => {
    setQuestionIndex(questionIndex + 1)
    // history.push('/result')
  }
  const onResult = () => {
    history.push('/result')
  }

  const onPrevQuestion = () => {
    setQuestionIndex(questionIndex - 1)
  }

  //Handling result

  const onAnswer = answer => {
    console.log('the answer is:', answer)

    const newAnswers = [...answers]
    newAnswers[questionIndex] = answer
    setAnswers(newAnswers)
  }

  const onReset = () => {
    setAnswers([])
    setQuestionIndex(0)
    history.push('/question')
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home onSubmit={handleValueForm} {...props} />}
        />
        <Route
          path="/question"
          exact
          render={props => (
            <QuestionForm
              {...props}
              questionNumber={questionIndex + 1}
              onNext={
                questionIndex < obj.length - 1 ? onNextQuestion : onResult
              }
              onPrev={questionIndex > 0 ? onPrevQuestion : null}
              onAnswer={onAnswer}
              userAnswer={answers[questionIndex]}
              questionData={obj[questionIndex]}
            />
          )}
        />
        <Route
          exact
          path="/result"
          render={props => (
            <ResultForm
              questionData={obj}
              answers={answers}
              fullName={fullName}
              reset={onReset}
            />
          )}
        />
      </Switch>
    </div>
  )
}
export default App
