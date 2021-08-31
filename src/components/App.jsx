import { useState } from 'react'
import Header from "./Header"
import Tasks from './Tasks'
import AddTask from './AddTask'

const App = () => {
  // useState: array of database
  // useState: "tasks" use for properties. setTasks use for set a "tasks" func
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

  // Add Task
  const putTask = (task) => {
    // add random id for new task
    const id = Math.floor(Math.random() * 10000) + 1
    // add new id on new task and add new task
    const newTask = {id, ...task}
    // add new task on tasks
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
    <div className="container">
      <Header />
      <AddTask onAdd={putTask}/>
      {tasks.length ? (<Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} />) : (
        'No Task To show!')}
    </div>
  )
}

export default App
 