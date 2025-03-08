<template>
  <div>
    <h2>Préférences</h2>
    <input type="text" v-model="searchQuery" placeholder="Rechercher une news" />
    <ul>
      <li v-for="news in filteredPreferences" :key="news.id">
        <h3>{{ news.title }}</h3>
        <p>{{ news.content }}</p>
        <img v-if="news.image" :src="news.image" alt="News Image" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preferences: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredPreferences() {
      return this.preferences.filter(news =>
        news.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        news.content.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    // Logique pour récupérer les préférences depuis le localStorage
  }
};
</script>