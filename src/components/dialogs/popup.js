import {Popover} from "react-bootstrap";
import { PropTypes } from 'prop-types';

const Popup = (props) => {
  return (
    props.open &&
    <Popover placement="right">
      <Popover.Content>
        {props.text}
      </Popover.Content>
    </Popover>
  )
}

Popup.propTypes = {
  text: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
}

export default Popup