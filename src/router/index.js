import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AdminHome from '../views/Admin/AdminHome.vue'
import ManageUser from '../views/Admin/ManageUser.vue'
import ManageMenu from '../views/Admin/ManageMenu.vue'
import ManageMeja from '../views/Admin/ManageMeja.vue'

import KasirHome from '../views/Kasir/KasirHome.vue'
import TransaksiPage from '../views/Kasir/TransaksiPage.vue'
import AddMenu from '../views/Kasir/AddMenu.vue'
import OnGoing from '../views/Kasir/OnGoing.vue'
import HistoryView from '../views/Kasir/HistoryView.vue'
import PrintNota from '../views/Kasir/PrintNota.vue'

import ManagerHome from '../views/Manager/ManagerHome.vue'
import AllTransaksi from '../views/Manager/AllTransaksi.vue'
import FilterTransaksi from '../views/Manager/FilterTransaksi.vue'
import ProfitPage from '../views/Manager/ProfitPage.vue'

import LoginPage from '../views/LoginPage.vue'
import NotFound from '../views/NotFound.vue'
import MauKemana from '../views/MauKemana.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginPage
  },
  {
    path: '/admin',
    component: AdminHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/manageuser',
    component: ManageUser,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/managemenu',
    component: ManageMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/managetable',
    component: ManageMeja,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/kasir',
    component: KasirHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/transaksi',
    component: TransaksiPage,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/addmenu',
    component: AddMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/ongoing',
    component: OnGoing,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/history',
    component: HistoryView,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/printnota/:id',
    component: PrintNota,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/manager',
    component: ManagerHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manager']
    }
  },
  {
    path: '/alltransaction',
    component: AllTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manager']
    }
  },
  {
    path: '/filtertransaction',
    component: FilterTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manager']
    }
  },
  {
    path: '/profit',
    component: ProfitPage,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manager']
    }
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/forbidden',
    component: MauKemana
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, form, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    const userRole = localStorage.getItem("role")
    if (!userRole) {
      next({
        path: '/'
      })
    } else {
      if (to.meta.allowedRoles.includes(userRole)) {
        next()
      } else {
        next({
          path: '/forbidden'
        })
      }
    }
  } else {
    next();
  }
})