import { useState } from 'react'
import { Header } from '../../components/Header'
import { Tasks } from '../../components/Tasks'

export const Home = () => {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (taskTitle) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }

    setTasks((prevState) => [...prevState, newTask]);
  }

  return (
    <>
      <Header onHandleAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
      />
    </>
  )
}
