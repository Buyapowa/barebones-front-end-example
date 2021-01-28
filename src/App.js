import logo from './logo.svg';
import './App.css';
import SharePage from './components/Pages/sharePage'
import FriendPage from './components/Pages/friendPage'
import './assets/css/index.scss';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import store from "./redux/store";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400&display=swap" rel="stylesheet"/>
        <Switch>
          <Route exact path="/share" component={SharePage} />
          <Route exact path="/friend/:unique_link" component={FriendPage} />
          <Redirect to="/share" />
        </Switch>
      </Provider>
    </Router>  
  );
}

export default App;
