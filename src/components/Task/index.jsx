import { Container, CheckContainer, DeleteButton } from './styles'
import { TbTrash } from 'react-icons/tb'

export const Task = () => {
  return (
    <>
      <Container>
        <CheckContainer>
          <div />
        </CheckContainer>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <DeleteButton>
          <TbTrash size={20} />
        </DeleteButton>
      </Container>
    </>
  )
}
