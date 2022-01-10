export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
          {
            name: 'register',
            path: '/user/register',
            component: './user/register',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    component: './dashboard',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    icon: 'block',
    name: 'post',
    path: '/post',
    component: './post',
  },
  {
    icon: 'block',
    name: 'category',
    path: '/category',
    component: './category',
  },
  {
    icon: 'block',
    name: 'files',
    path: '/files',
    component: './files',
  },
  {
    name: 'users',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        path: '/account/center',
        component: './account/center',
      },
      {
        name: 'settings',
        path: '/account/settings',
        component: './account/settings',
      },
      {
        name: 'list',
        path: '/account/list',
        component: './account/list',
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
