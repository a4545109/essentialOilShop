import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 外圍的版
    name: 'Home',
    component: Home,
    children: [
      {
        path: '', // 首頁
        component: () => import('../views/frontend/Home.vue')
      },
      { // 動態路由
        path: '/product/:id',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: '/customer_profile',
        component: () => import('../views/frontend/Customer_Profile.vue')
      },
      {
        path: '/cart_success',
        component: () => import('../views/frontend/Cart_Success.vue')
      },
      {
        path: '/login',
        component: () => import('../views/frontend/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: '/admin/products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: '/admin/coupons',
        component: () => import('../views/backend/Coupons.vue')
      },
      {
        path: '/admin/orders',
        component: () => import('../views/backend/Orders.vue')
      },
      {
        path: '/admin/storages',
        component: () => import('../views/backend/Storages.vue')
      },
      {
        path: '/admin/cart_checkout',
        name: '用戶訂單列表',
        component: () => import('../views/backend/Cart_Checkout.vue')
      },
      {
        path: '/admin/cart_checkout/:orderId',
        name: '用戶訂單列表',
        component: () => import('../views/backend/Cart_Checkout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
