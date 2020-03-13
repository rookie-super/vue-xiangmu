import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Goods from  '../views/Goods'
import CheckOut from  '../views/CheckOut'
import Cart from '../views/Cart'
import PayMent from '../views/PayMent'
import Order from '../components/Order'
import zhuCe from '../components/zhuCe'
import dengLu from '../components/dengLu'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
        path: '/shop/:ids',
        name: 'Shop',
        component: Shop,
        props:true
    },
    {
        path: '/goods/:dataId/:dataIds',
        name: 'good',
        component: Goods,
        props:true
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: CheckOut,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
    },
    {
        path: '/payment/:id/:bool',
        name: 'payment',
        component: PayMent,
        props:true
    },
    {
    path: '/order',
    name: 'order',
    component: Order
    },
    {
        path: '/zhuce',
        name: 'zhuce',
        component: zhuCe
    },
    {
        path: '/denglu',
        name: 'denglu',
        component: dengLu
    }
];

const router = new VueRouter({
  routes
});

export default router
