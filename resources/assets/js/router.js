import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Home from './components/Home.vue';

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home, name: 'home' },
      { path: '/about', component: About, name: 'about' },
      { path: '/contact', component: Contact, name: 'contact' }
    ]
  })
}
