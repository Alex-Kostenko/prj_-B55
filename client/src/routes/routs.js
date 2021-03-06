import HomePage from '../pages/home';
import WrappedRegisterPage from '../pages/auth/register';
import RenderUser from '../pages/profile/user';
import UserInfo from '../pages/profile/editUser';
import UserList from '../pages/userList';

const routs = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/registration',
    component: WrappedRegisterPage,
    exact: true
  },
  {
    path: '/user',
    component: RenderUser,
    exact: true
  },
  {
    path: '/editUser',
    component: UserInfo,
    exact: true
  },
  {
    path: '/userList',
    component: UserList,
    exact: true
  },
];

export default routs;
