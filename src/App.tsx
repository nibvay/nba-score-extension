import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import routes from './routes';
import SideMenu from './components/SideMenu';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

function App() {
  return (
    <Router>
      <LayoutStyled>
        <SideMenu />
        <Switch>
          {routes.map(({ path, component }) => (
            <Route
              key={`route_path_${path}`}
              path={path}
              component={component}
            />
          ))}
        </Switch>
      </LayoutStyled>
    </Router>
  );
}

export default App;
