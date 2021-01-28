import React from "react";
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { loadUser, loadRewards } from "../../redux/reducers/reducers";
import SendEmail from '../containers/sendEmail'
import ActivityFeed from '../containers/activityFeed'
import ShareLink from '../elements/shareLink'


//TODO: ERROR BOUNDARIES, AND UNIT TESTS

store.dispatch(loadUser())
store.dispatch(loadRewards())

const SharePage = () => {

  const { user, rewards } = useSelector((state) => {
    return {
      user: state.user,
      rewards: state.rewards
    }
  })

  const getUniqueKey = (username) => {
    return username.toLowerCase() + "_" + (new Date().getTime()).toString(36)
  }

  const link = window.location.origin + "/friend/" + getUniqueKey(user.username)

  return (
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h1 className="b">We love our super-fans!</h1>
          </div>
          <div className="col-md-6">
            <ShareLink link={link} />
            <ActivityFeed activities={rewards} />
          </div>
          <div className="col-md-6 b-grey mt-4">
            {user && <SendEmail user={user} />}
          </div>
        </div>
      </div>
  )
}

export default SharePage;