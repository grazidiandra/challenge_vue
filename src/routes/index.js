import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import ErrorPage from '../pages/ErrorPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/character/:id',
      name: 'DetailPage',
      component: DetailPage,
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: ErrorPage,
    },
  ],
});