import React from 'react'
// import ChildResult from './ChildResult'
import ChildResult from './childResult'
let ResultForm = props => {
  const { questionData, answers, compare, fullName, reset } = props

  const calculateTotal = () => {
    var count = 0,
      i

    for (i = 0; i < questionData.length; i++) {
      if (questionData[i].answer === answers[i]) {
        count++
      }
    }
    return count
  }

  // reset button

  const onReset = () => {
    reset()
  }

  const showAnswer = questionData.map((item, index) => {
    return (
      <ul key={index} className="child-question">
        <ChildResult
          question={item.question}
          rightanswer={item.answer}
          yourselected={answers[index]}
          compare={item.answer === answers[index]}
        />
      </ul>
    )
  })

  return (
    <div>
      <div>Name: {fullName}</div>
      <div>
        result:{calculateTotal()}/{questionData.length}
      </div>
      <button onClick={onReset}>Reset</button>
      <div>{showAnswer}</div>
    </div>
  )
}
export default ResultForm
