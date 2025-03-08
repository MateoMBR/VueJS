import { createRouter, createWebHistory } from 'vue-router'
import FeedList from '@/views/FeedList.vue'
import AddFeed from '@/views/AddFeed.vue'
import ShowFeed from '@/views/ShowFeed.vue'
import EditFeed from '@/views/EditFeed.vue'
import Preferences from '@/views/Preferences.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FeedList,
    },
    {
      path: '/addfeed',
      name: 'addFeed',
      component: AddFeed,
    },
    {
      path: '/feed/:id',
      name: 'showFeed',
      component: ShowFeed,
    },
    {
      path: '/editfeed/:id',
      name: 'editFeed',
      component: EditFeed,
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: Preferences,
    },
    {
      path: '/notfound',
      name: 'notFound',
      component: NotFound,
    }
  ],
})

export default router