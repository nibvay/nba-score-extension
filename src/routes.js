import GameBoard from './scenes/GameBoard/GameBoard';
import Login from './scenes/Login/Login';
import Setting from './scenes/Setting/Setting';

const routes = [
  {
    path: "/login",
    tabName: 'LOGIN',
    component: Login,
  },
  {
    path: "/game-board",
    tabName: 'GAME BOARD',
    component: GameBoard,
  },
  {
    path: "/setting",
    tabName: 'SETTING',
    component: Setting,
  }
];

export default routes;