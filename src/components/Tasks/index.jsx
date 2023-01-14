import { Section, Header, Div } from './styles'
import { Task } from '../Task'

export const Tasks = ({ tasks }) => {
  const isCompleted = {
    color: '#8284FA',
  }

  return (
    <>
      <Section>
        <Header>
          <Div>
            <p>Create tasks</p>
            <span>10</span>
          </Div>
          <Div>
            <p style={isCompleted}>Completed</p>
            <span>1 of 10</span>
          </Div>
        </Header>

        {tasks.map(task => <Task key={task.id} task={task} />)}
      </Section>
    </>
  )
}
