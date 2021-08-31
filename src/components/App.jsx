import { useState } from 'react'
import Header from "./Header"
import Tasks from './Tasks'
import AddTask from './AddTask'

const App = () => {
  // set AddTask to not display
  const [showAddTask, setShowAddTask] = useState(false)
  // useState: array of data
  // useState: "tasks" use for state. setTasks use for update "tasks" 
  const [tasks, setTasks] = useState([
    // all this is "tasks" properties
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
     id: 2,
     text: 'Meeting at Office',
     day: 'Feb 6th at 10:00am',
     reminder: true,
   },
   {
     id: 3,
     text: 'Food Shopping',
     day: 'Feb 7th at 1:00pm',
     reminder: false,
   },
 ])

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
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
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
 