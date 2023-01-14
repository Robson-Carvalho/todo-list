import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Tasks } from '../../components/Tasks'

const LOCAL_STORAGE_KEY = "todo:savedTasks"

export const Home = () => {
  const [tasks, setTasks] = useState([])

  const getTasksInLocalStorage = () => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTasks(saved)
  }

  const postTasksInLocalStorage = (newTasks) => {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  useEffect(() => {
    getTasksInLocalStorage()
  }, [])

  const handleAddTask = (taskTitle) => {
    postTasksInLocalStorage([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }])
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
    postTasksInLocalStorage(newTask)
  }

  const deleteTaskById = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)
    postTasksInLocalStorage(newTask)
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
