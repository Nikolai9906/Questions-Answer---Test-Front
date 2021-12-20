import { Switch, Route } from 'react-router';
import Answer from './Components/Home/Answer';
import Home from './Components/Home/Home';
import Login from './Components/login/Login';
import UserHome from './Components/Dashboard/UserHome'
import UserAnswer from './Components/Dashboard/UserAnswer';
import createAnswer from './Components/Dashboard/CreateAnswer';
import CreateQuestion from './Components/Dashboard/CreateQuestion';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/answer" component={Answer} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/user-home" component={UserHome} exact />
        <Route path="/user-answer" component={UserAnswer} exact />
        <Route path="/create-answer" component={createAnswer} exact />
        <Route path="/create-question" component={CreateQuestion} exact />
      </Switch>
    </div>
  );
}

export default App;
