import GameBoard from './scenes/GameBoard/GameBoard';
import Login from './scenes/Login/Login';
import Setting from './scenes/Setting/Setting';

const routes = [
  {
    path: "/login",
    component: Login,
    tabName: 'LOGIN',
  },
  {
    path: "/game-board",
    component: GameBoard,
    tabName: 'GAME BOARD',
  },
  {
    path: "/setting",
    component: Setting,
    tabName: 'SETTING',
  }
];

export default routes;