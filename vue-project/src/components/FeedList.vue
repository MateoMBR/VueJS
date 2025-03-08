<template>
  <div>
    <h2>Liste des flux RSS</h2>
    <ul>
      <li v-for="feed in feeds" :key="feed.id">
        {{ feed.title }}
        <button @click="editFeed(feed)">Modifier</button>
        <button @click="deleteFeed(feed.id)">Supprimer</button>
        <button @click="viewNews(feed.id)">Voir les news</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    feeds: Array
  },
  methods: {
    editFeed(feed) {
      this.$emit('edit-feed', feed);
    },
    deleteFeed(id) {
      this.$emit('delete-feed', id);
    },
    viewNews(id) {
      this.$router.push(`/news/${id}`);
    }
  }
};
</script>