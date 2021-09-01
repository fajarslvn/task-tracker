import { useState, useEffect } from 'react'
import Header from "./Header"
import Tasks from './Tasks'
import AddTask from './AddTask'

const App = () => {
  // set AddTask to not display
  const [showAddTask, setShowAddTask] = useState(false)
  // useState: array of data
  // useState: "tasks" use for state. setTasks use for update "tasks" 
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks= async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Feth Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Fetch Task
  const fetchTask = async () => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add Task (to array of data)
  const putTask = (task) => {
    // add random id for new task
    const id = Math.floor(Math.random() * 10000) + 1
    // add new id on new task and add new all new task
    const newTask = {id, ...task}
    // add all from the "...task" with the new task
    setTasks([...tasks, newTask])
  }

  //  Delete Task 
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    // res.status === 200 ?
    setTasks(tasks.filter((task) => task.id !== id))
    // : alert('Error deleting this task')
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    // Header: if showAddTask === false return empty
    // AddTask: if showAddTask (default is false) === true : AddTask (show)
    // Tasks: show Tasks if not empty, if empty show notification
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={putTask} />}
      {tasks.length ? (<Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} />) : (
        'No Task To show!')}
    </div>
  )
}

export default App
 