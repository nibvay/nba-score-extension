import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import routes from './routes';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/game-board">Game Board</Link></li>
          <li><Link to="/setting">Setting</Link></li>
        </ul>
      </div>
      <Switch>
        {routes.map(({path, component}) => (
          <Route
            key={`route_path_${path}`}
            path={path}
            component={component}
          />
        ))}
      </Switch>
      {/* <div style={{ margin: 10, width: 500, height: 500, overflow: 'scroll' }}>
        <GameBoard />
      </div> */}

    </Router>
  );
}

export default App;
