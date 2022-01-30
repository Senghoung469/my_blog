import Vue from 'vue'
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
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/post',
    name: 'post',
    component: PostList
  },
  {
    path: '/post/create',
    name: 'post-create',
    component: () => import('../views/admin/post/CreatePost')
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/admin/category/Category')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
