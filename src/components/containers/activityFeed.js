import React from "react";
import { ListGroup, ButtonGroup, Button, Form } from "react-bootstrap";
import {IMGSRC} from '../../redux/static';
import IconText from '../elements/iconText'
import { PropTypes } from 'prop-types';


const ActivityFeed = (props) => {

  const getText = (type, username) => {
    let text
    switch (type) {
      case 1:
        text = 'Your friend ' + username + ' earned you a reward'
        break;
      case 2:
        text = "A friend visited your link, but didn't earn you a reward!"
        break;
      case 3:
        text = "You tried to refer yourself! Whoops"
        break;
    }
    return text
  }

  //I assumed that rewards were sorted
  const lastActivities = props.activities.slice(-3).map((e) => {
    return {
      icon: IMGSRC.REWARDS[e.type - 1],
      text: getText(e.type, e.username)
    }
  })
  const rewards = props.activities.filter((e) => e.type === 1)

  return (
    <React.Fragment>
      <div>Welcome back, you've referred friends!</div>
      <div>Keep going for more rewards</div>
      <div className="List mt-3">
        <ListGroup className="grey-table">
          <ListGroup.Item ><h4 className="b">Activity feed</h4></ListGroup.Item>
          {
            lastActivities.map((v, i) => (
              <ListGroup.Item key={i}>
                <IconText icon={v.icon} text={v.text} />
              </ListGroup.Item>
            ))
          }
          <ListGroup.Item>
            <div className="row">
              <div className="col-md-5 offset-md-6">Total rewards</div>
              <div className="col-md-1 b">{rewards.length}</div>
            </div>
          </ListGroup.Item>

        </ListGroup>
      </div>
    </React.Fragment>
  )
}

ActivityFeed.propTypes = {
  activities: PropTypes.array.isRequired
}

export default ActivityFeed;