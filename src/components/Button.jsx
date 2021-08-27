const Button = ({ color, text }) => {
  return <button style={{backgroundColor: color}} className='btn'>{text}</button>
}

Button.defaultProps = {
  text: 'Change me',
  color: 'orange'
}

export default Button
