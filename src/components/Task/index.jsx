import { Container, CheckContainer, DeleteButton, Div } from './styles'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from "react-icons/bs"

export const Task = ({ task, onCompleted }) => {

  const styleTaskCompleted = {
    color: "#808080",
    textDecoration: "line-through"
  }

  return (
    <>
      <Container>
        <CheckContainer onClick={() => onCompleted(task.id)}>
          {task.isCompleted ? <BsFillCheckCircleFill size={20} /> : <Div />}
        </CheckContainer>

        <p style={task.isCompleted ? styleTaskCompleted : null}>{task.title}</p>

        <DeleteButton>
          <TbTrash size={20} />
        </DeleteButton>
      </Container>
    </>
  )
}
