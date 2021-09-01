import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header"
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

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
    const res = await fetch('http://localhost:5000/tasks/')
    const data = await res.json()
    return data
  }

  // Fetch Task 
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add Task (to array of data)
  const createTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

   /** const id = Math.floor(Math.random() * 10000) + 1 // add random id for new task
    const newTask = {id, ...task} // add new id on new task and add new all new task
    setTasks([...tasks, newTask]) // add all from the "...task" with the new task */
  }

  //  Delete Task 
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    res.status === 200 ?
    setTasks(tasks.filter((task) => task.id !== id))
    : alert('Error deleting this task')
  }

  // Toggle Reminder
  const toggleReminder = async (id) => { 
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    // Header: if showAddTask === false return empty
    // AddTask: if showAddTask (default is false) === true : AddTask (show)
    // Tasks: show Tasks if not empty, if empty show notification
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      
      <Route path='/' exact render={(props) => (
         <>
          {showAddTask && <AddTask onAdd={createTask} />}
          {tasks.length ? (<Tasks tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder} />) : (
            'No Task To show!')}
         </> 
      )} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  )
}

export default App
 