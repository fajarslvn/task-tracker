import PropTypes from 'prop-types'
import Button from './Button'
// Header: property param
const Header = ({ title }) => { 
  // Button: func
  const onClick = () => {
    console.log('Click');
  }

  return (
    // header: add property
    // Button: adding all custom properties
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' 
      text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/** CSS in JS 
const headingStyle = {
  color: 'blue',
  backgroundColor: 'red',
}*/

export default Header
