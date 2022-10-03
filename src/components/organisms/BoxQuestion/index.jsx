import { useState } from "react";
import { MdExpandMore, MdExpandLess, MdOutlineBook } from "react-icons/md";
import LabelQuestion from "../../atoms/LabelQuestion";
import ContentQuestion from "../../molecules/ContentQuestion";
import "./styles.scss"
import DataExercises from "../../../api/data.json"


const BoxQuestion = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [handleExercise, setHandleExercise] = useState('')

  const nextSlide = () => {
    setHandleExercise(handleExercise === DataExercises.length - 1 ? 0 : handleExercise + 1)
  }

  const prevSlide = () => {
    setHandleExercise(handleExercise === 0 ? DataExercises.length - 1 : handleExercise - 1)
  }

  return (
    <div className="container">
      <div onClick={() => setIsOpen(!isOpen)} className="title-wrapper">
        <h2>Acentuação Gráfica</h2>
        {isOpen ? <MdExpandLess size={25} /> : <MdExpandMore size={25} />}
      </div>
      <div className="subtitle-wrapper">
        <MdOutlineBook />
        <h3>O uso dos porquês</h3>
      </div>
      {isOpen &&
        <>
          <div className="label-wrapper">
            {DataExercises.map((question, index) => {
              return (
                <div key={index}>
                  <LabelQuestion onClick={() => setHandleExercise(index)} title={question.title} />
                </div>
              )
            })}

          </div>
          <div className="content-questions">
            {
              handleExercise !== '' ?
                <>
                  <ContentQuestion
                    numberQuestion={handleExercise + 1}
                    totalQuestions={DataExercises.length}
                    dataQuestion={DataExercises[handleExercise].dataQuestion}
                    dataAnswer={DataExercises[handleExercise].dataAnswer}
                  />
                  <div className="wrapper-foward-backward">
                    <p onClick={() => prevSlide()}>voltar</p>
                    <p onClick={() => nextSlide()}>avançar</p>
                  </div>
                </>
                : ''
            }
          </div>

        </>
      }
    </div>
  )
}

export default BoxQuestion