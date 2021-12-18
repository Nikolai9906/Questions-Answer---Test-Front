import { Switch, Route } from 'react-router';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
