import { PropTypes } from 'prop-types';

const IconBox = (props) => {
  return (
    <div className="iconBox">
      <img name="image" src={props.icon} />
      <div className="arrow"></div>
    </div>
  )
}
IconBox.propTypes = {
  icon: PropTypes.string.isRequired
}

export default IconBox
