import Vue from 'vue';
import VueRouter from 'vue-router'
import Register from '../views/auth/Register';
import Dashboard from '../views/admin/Dashboard';
import PostList from '../views/admin/post/Post';
import Home from '../views/page/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/auth/Login")
  },
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/post',
    name: 'post',
    component: PostList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/post/create',
    name: 'post-create',
    component: () => import('../views/admin/post/CreatePost'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/category',
    name: 'category',
    component: () => import('../views/admin/category/Category'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/category/create',
    name: 'category-create',
    component: () => import('../views/admin/category/CreateCategory'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/category/update',
    name: 'category-update',
    component: () => import('../views/admin/category/UpdateCategory'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/tag',
    name: 'tag',
    component: () => import('../views/admin/tag/Tag'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/tag/create',
    name: 'tag-create',
    component: () => import('../views/admin/tag/CreateTag'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/tag/update',
    name: 'tag-update',
    component: () => import('../views/admin/tag/UpdateTag'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/post/content',
    name: 'Detail',
    component: () => import('../views/page/Detail'),
    meta: {
      requiresAuth: false,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('access_token')) {
      next()
      return
    }
    next('/login')
  }
  next()
})

export default router
