<template>
  <div class="container">
    <h1>Liste des flux RSS</h1>
    <div v-for="feed in feeds" :key="feed.id" class="card">
      <div class="feed">
        <router-link :to="{ name: 'showFeed', params: { id: feed.id } }"> {{ feed.title }} </router-link>
        <div>
          <button @click="removeFeed(feed.id); $event.stopPropagation()">
            <p>🗑️</p>
          </button>
          <router-link :to="{ name: 'editFeed', params: { id: feed.id } }">
            <button @click="$event.stopPropagation()">
              <p>✏️</p>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const feeds = ref([]);

onMounted(() => {
  const savedFeeds = JSON.parse(localStorage.getItem('feeds')) || [];
  feeds.value = savedFeeds;
});

const removeFeed = (id) => {
  feeds.value = feeds.value.filter(feed => feed.id !== id);
  localStorage.setItem('feeds', JSON.stringify(feeds.value));
};
</script>

<style scoped>
.feed {
  display: flex;
  justify-content: space-between;
}

.feed button {
  background-color: var(--color-button);
  color: var(--color-button-text);
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 5px;
}

.feed button:hover {
  background-color: var(--color-button-hover);
}

.feed a {
  flex-grow: 1;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>