<template>
  <div>
    <h2>{{ isEditing ? 'Modifier' : 'Enregistrer' }} un flux RSS</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Titre:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label for="link">Lien:</label>
        <input type="text" id="link" v-model="link" required />
      </div>
      <button type="submit">{{ isEditing ? 'Modifier' : 'Enregistrer' }}</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isEditing: Boolean,
    feed: Object
  },
  data() {
    return {
      title: this.feed ? this.feed.title : '',
      link: this.feed ? this.feed.link : ''
    };
  },
  methods: {
    submitForm() {
      if (!this.title || !this.link) {
        alert('Les champs titre et lien sont requis.');
        return;
      }
      const feed = { title: this.title, link: this.link };
      if (this.isEditing) {
        this.$emit('update-feed', feed);
      } else {
        this.$emit('add-feed', feed);
      }
    }
  }
};
</script>