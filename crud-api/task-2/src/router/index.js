import { createRouter, createWebHistory } from 'vue-router'
  import MembersList from '../views/MembersList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'members-list',
      component: MembersList,
    },
    {
      path: '/add-member',
      name: 'add-member',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddMember.vue'),
    },
    {
      path: '/members-list',
      name: 'members-list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MembersList.vue'),
    },
    {
      path: '/edit-member',
      name: 'edit-member',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EditMembers.vue'),
    },
  ],
})

export default router
