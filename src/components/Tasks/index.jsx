import { Section, Header, Div } from './styles'
import { Task } from '../Task'

export const Tasks = ({ tasks, onCompleted, onDelete }) => {
  const tasksQuantity = tasks?.length
  const completedTasks = tasks?.filter(task => task.isCompleted).length

  const isCompleted = {
    color: '#8284FA',
  }

  return (
    <>
      <Section>
        <Header>
          <Div>
            <p>Create tasks</p>
            <span>{tasksQuantity}</span>
          </Div>
          <Div>
            <p style={tasksQuantity !== completedTasks ? isCompleted : null}>Completed</p>
            <span>{completedTasks} of {tasksQuantity}</span>
          </Div>
        </Header>

        {tasks?.map(task => <Task
          key={task.id}
          task={task}
          onCompleted={onCompleted}
          onDelete={onDelete}
        />)}
      </Section>
    </>
  )
}
