import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle  }) => {
  // className: default class style is "task".
  // className: conditional style, if task.reminder is true, then add class "reminder"
  // onDoubleClick: onToggle will effect the "task.id" (object data)
  return (
    <div className={`task  ${task.reminder && 'reminder'}`} 
    onDoubleClick={() => onToggle(task.id)}>
      <h3> 
        {task.text}
        <FaTimes style=
          {{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  ) 
}

export default Task
