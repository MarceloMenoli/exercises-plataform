import "./styles.scss"

const LabelAlternative = ({
  letterAnswer,
  answerDescription,
  onClick,
  selectedAnswer,
}) => {
  return (
    <div
      className="container-alternative"
      onClick={() => onClick({
        letter: letterAnswer,
        answer: answerDescription,
      })}
    >
      <p className={`letter-alternative ${selectedAnswer}`}>{letterAnswer}</p>
      <p className={`alternative ${selectedAnswer}`}>{answerDescription}</p>
    </div>
  )
}

export default LabelAlternative