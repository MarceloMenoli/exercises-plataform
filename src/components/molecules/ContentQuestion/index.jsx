import { useState } from "react"
import LabelAlternative from "../../atoms/LabelAlternative"
import "./styles.scss"

const ContentQuestion = ({
  dataQuestion,
  totalQuestions,
  numberQuestion,
  dataAnswer,
  selectedAnswer,
}) => {

  const [handleAnswer, setHandleAnswer] = useState('')

  console.log(handleAnswer.letter);

  return (
    <div className="container-content-question">
      <div className="identification-question">
        <p>({dataQuestion.id})</p>
        <div className="number-question">
          <p>Exercício {numberQuestion}</p>
          <p>/{totalQuestions}</p>
        </div>
      </div>
      <div className="question-description">
        {dataQuestion.descripionExercise}
      </div>
      <div className="answer-content">
        {dataAnswer.map((answer, index) => {
          return (
            <LabelAlternative
              key={index}
              letterAnswer={answer.letterAnswer}
              answerDescription={answer.answerDescription}
              selectedAnswer={handleAnswer.letter === answer.letterAnswer ? 'selected' : ''}
              onClick={setHandleAnswer}
            />
          )
        })

        }
      </div>
    </div>
  )
}

export default ContentQuestion