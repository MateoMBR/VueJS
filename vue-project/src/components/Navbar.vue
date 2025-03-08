<template>
  <nav class="navbar">
    <div class="burger-menu" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="link-container" :class="{ open: isMenuOpen }">
      <router-link to="/">Liste des flux</router-link>
      <router-link to="/addfeed">Enregistrer un flux</router-link>
      <router-link to="/preferences">Préférence</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-background-dark);
  padding: 10px;
  color: var(--color-text-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger-menu {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.burger-menu span {
  background-color: var(--color-text-light);
  height: 3px;
  width: 25px;
  margin: 4px 0;
  transition: 0.4s;
}

.link-container {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: var(--color-background-dark);
  border-radius: 8px;
  padding: 10px;
}

.link-container.open {
  display: flex;
}

.link-container > * {
  margin: 10px 0;
  color: var(--color-text-light);
  text-decoration: none;
}

.link-container > *:hover {
  color: var(--color-link-hover);
}

@media (min-width: 768px) {
  .burger-menu {
    display: none;
  }

  .link-container {
    display: flex;
    flex-direction: row;
    position: static;
    background-color: transparent;
    padding: 0;
  }

  .link-container > * {
    margin: 0 20px;
  }
}
</style>