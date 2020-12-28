<template>
  <div>
    <Navbar />
    <main class="theme-default-content">
      <h1>お知らせ</h1>
      <ul>
        <li v-for="page of $pagination.pages" :key="page.key">
          <a :href="page.path">{{ page.title }}</a>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Navbar from '@parent-theme/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>
