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
        path: '/cart_checkout',
        name: '用戶訂單列表',
        component: () => import('../views/frontend/Cart_Checkout.vue')
      },
      {
        path: '/cart_checkout/:orderId',
        name: '用戶訂單列表',
        component: () => import('../views/frontend/Cart_Checkout.vue')
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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

// ##前端頁面
// 首頁 /
// 關於我們 /about
// 產品頁面 /products
//   單一產品頁面 /product
// 購物車 /cart
// 購物成功

// ##後台管理頁面
// 登入頁面 /login
// 產品管理頁面 /admin/products 巢狀路由
// 優惠卷管理頁面 /admin/coupons 巢狀路由
// 訂單管理頁面

// 1. 開 .vue 檔
// 2. 建立路由
// 3. 加入路徑 router-link
