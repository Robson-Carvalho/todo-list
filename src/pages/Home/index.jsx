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

  const toggleTaskCompletedById = (taskId) => {
    const newTask = tasks.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTask)
  }

  const deleteTaskById = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  return (
    <>
      <Header onHandleAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        onCompleted={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  )
}
