<template>
  <div>
    <Navbar />
    <main class="theme-default-content">
      <h1>お知らせ</h1>
      <ul>
        <li v-for="page of $pagination.pages" :key="page.key">
          <a :href="page.path"
            ><span class="publish-date">{{
              formatDate(page.frontmatter.date)
            }}</span
            ><span>{{ page.title }}</span></a
          >
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
  methods: {
    formatDate(dateStr) {
      const d = new Date(dateStr)
      return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`
    },
  },
}
</script>

<style lang="stylus" scoped>
.publish-date {
  display: inline-block;
  color: #444;
  margin-right: 0.5em;
  font-size: 0.9em;
}
</style>
