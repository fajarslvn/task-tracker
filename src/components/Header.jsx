import PropTypes from 'prop-types'
import Button from './Button'
// Header: property param
const Header = ({ title, onAdd, showAdd }) => { 
  return (
    // header: add property
    // Button: adding all custom properties
    // onClick: Toggle butto func
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}
// strict property type
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/** custom CSS in JS 
const headingStyle = {
  color: 'blue',
  backgroundColor: 'red',
}*/

export default Header
