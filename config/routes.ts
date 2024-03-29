﻿export default [
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
    path: '/blog',
    icon: 'block',
    name: 'blog',
    routes: [
      {
        path: '/blog',
        redirect: '/blog/post',
      },
      {
        name: 'post',
        path: '/blog/post',
        component: './post/list',
      },
      {
        name: 'center',
        path: '/blog/post/center/:id?',
        component: './post/center',
        hideInMenu: true,
      },
    ],
  },
  {
    name: 'category',
    icon: 'block',
    path: '/category',
    component: './category',
  },
  {
    path: '/commerce',
    icon: 'shop',
    name: 'commerce',
    routes: [
      {
        path: '/commerce',
        redirect: '/commerce/overview',
      },
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
    access: 'canAdmin',
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
      {
        name: 'backup',
        path: '/settings/backup',
        component: './settings/backup',
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
