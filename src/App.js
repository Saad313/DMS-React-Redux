import AddUsers from './Components/AddUsers';
import ViewUsers from './Components/ViewUsers';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <h2 className='center '>Data Management System</h2>
      </div>
      <Router>
        <Switch>
          <Route exact path='/Login'>
            <Login />
          </Route>
          <Route eaxact path='/ManageUser'>
            <AddUsers />
            <ViewUsers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
