import "./styles.scss"

const LabelQuestion = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className="wrapper-label">{title}</div>
  )
}

export default LabelQuestion