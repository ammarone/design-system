import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Colors from '../views/Design/Colors.vue';
import Typography from '../views/Design/Typography.vue';
import Buttons from '../views/Components/Buttons.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/design/colors',
    name: 'colors',
    component: Colors,
  },
  {
    path: '/design/typography',
    name: 'typography',
    component: Typography,
  },
  {
    path: '/components/buttons',
    name: 'buttons',
    component: Buttons,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
