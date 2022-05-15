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
    name: 'blog',
    routes: [
      {
        name: 'post',
        path: '/post',
        component: './post',
      },
      {
        name: 'category',
        path: '/category',
        component: './category',
      },
    ],
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
        name: 'center',
        path: '/account/center',
        component: './account/center',
        hideInMenu: true,
      },
      {
        name: 'settings',
        path: '/account/settings',
        component: './account/settings',
        hideInMenu: true,
      },
      {
        name: 'list',
        path: '/account/list',
        component: './account/list',
      },
      {
        name: 'new-user',
        path: '/account/new',
        component: './account/new',
        hideInMenu: true,
      },
      {
        name: 'billing',
        path: '/account/billing',
        component: './account/billing',
        hideInMenu: true,
      },
    ],
  },
  {
    name: 'settings',
    icon: 'setting',
    access: 'canAdmin',
    routes: [
      {
        name: 'theme',
        path: '/settings/themes',
        component: './settings/themes',
      },
      {
        name: 'navbar',
        path: '/settings/navbar',
        component: './settings/navbar',
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
