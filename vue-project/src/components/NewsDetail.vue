<template>
  <div>
    <h2>{{ news.title }}</h2>
    <p>{{ news.content }}</p>
    <img v-if="news.image" :src="news.image" alt="News Image" />
  </div>
</template>

<script>
export default {
  props: {
    news: Object
  }
};
</script>