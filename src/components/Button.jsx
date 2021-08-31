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

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;