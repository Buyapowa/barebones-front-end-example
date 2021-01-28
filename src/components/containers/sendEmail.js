import { ListGroup, ButtonGroup, Button, Form } from "react-bootstrap";
import {IMGSRC} from '../../redux/static.js';
import IconBox from '../elements/iconBox'
import { PropTypes } from 'prop-types';

const SendEmail = (props) => {
  const sendEmail = () => {
    alert("Send email (call backend endpoint)")
  }
  return (
    <div>
      <div id="social-media-buttons" size="lg" className="mb-2 row squared pb-3">
        <Button className="col-md-3 active">
          <IconBox icon={IMGSRC.EMAIL} />
        </Button>
        <Button className="col-md-3">
          <IconBox icon={IMGSRC.FACEBOOK} />
        </Button>
        <Button className="col-md-3">
          <IconBox icon={IMGSRC.TWITTER} />
        </Button>
        <Button className="col-md-3">
          <IconBox icon={IMGSRC.ATTACH} />
        </Button>
      </div>
      <div className="mt-3">
        From <strong>{props.user.email}</strong>
      </div>
      <Form>
        <Form.Control type="email" placeholder="Email address" className="bg-white mt-4 mb-4"/>
        <Form.Control as="textarea" rows={3} className="bg-white"/>
        <Button type="submit" variant="" className="bg-green squared mt-4 b" onClick = {sendEmail}>
          Send email
        </Button>
      </Form>
    </div>
  )
}
SendEmail.propTypes = {
  user: PropTypes.shape({
      username: PropTypes.string, email: PropTypes.string
  }).isRequired 
}

export default SendEmail;
