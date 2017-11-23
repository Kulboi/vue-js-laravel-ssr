import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Page from './components/Page.vue';

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Page, name: 'home' },
      { path: '/about', component: Page, name: 'about' },
      { path: '/contact', component: Page, name: 'contact' }
    ]
  })
}
