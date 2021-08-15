import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../routes';
import Logo from './Logo';

const SideMenuStyled = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  background: #49b9df;

  .item {
    padding: 1em;
    color: white;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: #369ec0;
    }
  }
`;

function SideMenu() {
  return (
    <SideMenuStyled>
      <Logo />
      {routes.map(({ path, tabName }) => (
        <Link key={`link_path_${path}`} to={path}>
          <div className="item">{tabName}</div>
        </Link>
      ))}
    </SideMenuStyled>
  );
}

export default SideMenu;
