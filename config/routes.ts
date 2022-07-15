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
    path: '/blog',
    icon: 'block',
    name: 'blog',
    routes: [
      {
        name: 'post',
        path: '/blog/post',
        component: './post',
      },
      {
        name: 'center',
        path: '/blog/post/center/:id?',
        component: './post/center',
        hideInMenu: true,
      },
      {
        name: 'category',
        path: '/blog/category',
        component: './category',
      },
    ],
  },
  {
    path: '/commerce',
    icon: 'shop',
    name: 'commerce',
    routes: [
      {
        name: 'overview',
        path: '/commerce/overview',
        component: './commerce',
      },
      {
        name: 'products',
        path: '/commerce/products',
        component: './commerce/products',
      },
      {
        name: 'productCenter',
        path: '/commerce/products/center/:id?',
        component: './commerce/products/center',
        hideInMenu: true,
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
        path: '/account/center/:id',
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
    path: '/settings',
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
      {
        name: 'application',
        path: '/settings/applications',
        component: './settings/applications',
        access: 'canAdmin',
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
