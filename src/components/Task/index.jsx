import { Container, CheckContainer, DeleteButton, Div } from './styles'
import { TbTrash } from 'react-icons/tb'

export const Task = ({ task }) => {
  return (
    <>
      <Container>
        <CheckContainer>
          <Div />
        </CheckContainer>

        <p>{task.title}</p>

        <DeleteButton>
          <TbTrash size={20} />
        </DeleteButton>
      </Container>
    </>
  )
}
