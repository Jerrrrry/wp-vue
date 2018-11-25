import Vue from 'vue';
import VueRouter from 'vue-router';
import Feed from './views/Feed';
import FourOFour from './views/FourOFour';
import Post from './views/Post';
import bus from './bus';
import Home from './views/Home';
import Posts from './views/Posts';
import Contact from './views/Contact';
import Aboutus from './views/Aboutus';
import Tag from './views/Tag';

Vue.use(VueRouter);

const routes = [
  {
    name: 'index',
    path: '/',
    redirect:'/index'
  },
  {
    name: 'home',
    path: '/index',
    component:Home
  },
  {
    name: 'allposts',
    path: '/allposts',
    component: Feed
  },
  {
    name: 'posts',
    path: '/posts',
    component: Posts
  },
  {
    name: 'post',
    path: '/post/:slug',
    component: Post
  },

  {
    name: 'tag',
    path: '/tag/:id/:slug',
    component: Tag
  },
  {
    name: 'page',
    path: '/page/:page',
    component: Posts
  },
  {
    name: 'tagposts',
    path: '/tagposts/:slug/:page/:id',
    component: Tag
  },
  {
    name: 'contact',
    path: '/contact',
    component:Contact
  },
  {
    name: 'aboutus',
    path: '/aboutus',
    component:Aboutus
  },
  {
    name: 'four-o-four',
    path: '/404',
    component: FourOFour
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.afterEach((to, from) => {

  //-- Bump the key on App component to force component to update on route change.
  bus.$emit('bumpViewKey');
})

export default router;
