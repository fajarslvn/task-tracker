import PropTypes from 'prop-types';
// Button: calling params properties & event
const Button = ({ color, text, onClick }) => {
  return (
    // button: adding custom properties
    <button onClick={onClick}
    style={{ backgroundColor: color }} 
    className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Change me',
  color: 'steelblue ',
};
// BUtton: strict property type
Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;