import { createRouter, createWebHistory } from 'vue-router';
import FeedForm from '../components/FeedForm.vue';
import FeedList from '../components/FeedList.vue';
import NewsList from '../components/NewsList.vue';
import NewsDetail from '../components/NewsDetail.vue';
import Preferences from '../components/Preferences.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', component: FeedList },
  { path: '/add-feed', component: FeedForm },
  { path: '/edit-feed/:id', component: FeedForm, props: true },
  { path: '/news/:id', component: NewsList, props: true },
  { path: '/news/:feedId/:newsId', component: NewsDetail, props: true },
  { path: '/preferences', component: Preferences },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;