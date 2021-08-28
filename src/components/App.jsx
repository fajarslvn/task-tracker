import { useState } from 'react'
import Header from "./Header"
import Tasks from './Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
     id: 2,
     text: 'Client Meeting',
     day: 'Feb 6th at 10:00am',
     reminder: true,
   },
   {
     id: 3,
     text: 'Lunch',
     day: 'Feb 7th at 1:00pm',
     reminder: false,
   },
 ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
 