<template>
  <div>
    <Navbar />

    <main class="theme-default-content">
      <h1>{{ $page.title }}</h1>
      {{ $frontmatter.date }}
      <ul>
        <li v-for="tag of $frontmatter.tags" :key="tag">{{ tag }}</li>
      </ul>
      <Content />
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
