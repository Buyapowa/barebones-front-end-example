import React, { useState } from "react";
import { saveReward } from "../../redux/reducers/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import Dialogs from '../dialogs/dialogs'

const FriendPage = (props) => {
  const { unique_link } = useParams()
  const user = useSelector(state => state.user)
  const [isRewarded, setIsRewarded] = useState(false);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const rewardAction = (result, alias) => {
    const reward = {
      result: result,
      user: user,
      alias: alias,
      link: unique_link
    }
    saveReward(reward)
    setIsRewarded(true)
  }
  const onClose = (alias) => {
    if (alias) {
      rewardAction(true, alias)
    }
    setShow(false)
  }

  const displayNameDialog = () => {
    setShow(true)
  }


  return (
    <React.Fragment>
      <div className="col-md-12 mt-2">
        <div class="box box-element">
          <div class="view">
            <div class="jumbotron card card-block" contenteditable="true">
              {isRewarded ?
                <div>
                  <h1>Thanks!</h1>
                  <p>Your action has been saved</p>
                </div>
                :
                <React.Fragment>
                  <h2>Welcome to my page!</h2>
                  <p>Please, click the button below and help my page!</p>
                  <p>
                    <button className="btn btn-primary mr-1" onClick={displayNameDialog}>
                      Reward
                  </button>
                    <button className="btn btn-secondary" onClick={rewardAction.bind(this, false)}>
                      Reject
                  </button>
                  </p>
                </React.Fragment>
              }
            </div>
          </div>
        </div>

        <Dialogs.Input
          open={show}
          handleClose={onClose}
          type="input"
          title="Thanks for your reward!"
          text="May I ask what your name is?"
        />
      </div>
    </React.Fragment>
  )


}
export default FriendPage