import { Section, Header, Div } from "./styles";
import { Task } from "../Task";

export const Tasks = ({ tasks, onCompleted, onDelete }) => {
  const tasksQuantity = tasks?.length || 0;
  const completedTasks = tasks?.filter(task => task.isCompleted).length || 0;

  const isCompleted = {
    color: "#8284FA",
  };

  return (
    <>
      <Section>
        <Header>
          <Div>
            <p>Tarefas criadas</p>
            <span>{tasksQuantity}</span>
          </Div>
          <Div>
            <p style={tasksQuantity !== completedTasks ? isCompleted : null}>Concluída</p>
            <span>{completedTasks} de {tasksQuantity}</span>
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
};
