import { Container, Form, Input, Button } from './styles'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import logoImg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <>
      <Container>
        <img src={logoImg} alt="Logo todo list" />
        <Form>
          <Input placeholder="Add a new task" type="text" />
          <Button>
            Create
            <AiOutlinePlusCircle size={20} />
          </Button>
        </Form>
      </Container>
    </>
  )
}
