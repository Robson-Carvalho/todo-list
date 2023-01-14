import { Container, Form, Input, Button } from './styles'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import logoImg from '../../assets/logo.svg'
import { useState } from 'react'

export const Header = ({ onHandleAddTask }) => {
  const [title, setTitle] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    onHandleAddTask(title)
    setTitle("")
  }

  return (
    <>
      <Container>
        <img src={logoImg} alt="Logo todo list" />
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Add a new task"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Button>
            Create
            <AiOutlinePlusCircle size={20} />
          </Button>
        </Form>
      </Container>
    </>
  )
}
