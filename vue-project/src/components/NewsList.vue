<template>
  <div>
    <h2>News du flux {{ feed.title }}</h2>
    <select v-model="limit" @change="fetchNews">
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="all">Tout</option>
    </select>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <h3>{{ news.title }}</h3>
        <p v-if="news.description">{{ news.description }}</p>
        <img v-if="news.image" :src="news.image" alt="News Image" />
        <button @click="viewDetails(news.id)">Voir les détails</button>
        <button @click="savePreference(news)">Sauvegarder</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    feed: Object
  },
  data() {
    return {
      newsList: [],
      limit: '10'
    };
  },
  methods: {
    fetchNews() {
      // Logique pour récupérer les news du flux RSS
    },
    viewDetails(id) {
      this.$router.push(`/news/${this.feed.id}/${id}`);
    },
    savePreference(news) {
      // Logique pour sauvegarder la news dans les préférences
    }
  },
  created() {
    this.fetchNews();
  }
};
</script>