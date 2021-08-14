import GameBoard from './components/GameBoard';
import Login from './scenes/Login/Login';
import Setting from './scenes/Setting/Setting';

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/game-board",
    component: GameBoard,
  },
  {
    path: "/setting",
    component: Setting,
  }
];

export default routes;