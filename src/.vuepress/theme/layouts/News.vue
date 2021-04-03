<template>
  <div>
    <Navbar />

    <main class="theme-default-content">
      <h1>{{ $page.title }}</h1>
      <div class="article-info">
        <span class="publish-date">{{ publishDateString }}</span>
        <ul class="tag-list">
          <li class="tag-list__item" v-for="tag of $frontmatter.tags" :key="tag">
            <router-link :to="`/tags/${tag}`">{{ tag }}</router-link>
          </li>
        </ul>
      </div>
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
  computed: {
    publishDateString() {
      const dateStr = this.$frontmatter.date
      if (dateStr) {
        const d = new Date(dateStr)
        return `${d.getFullYear()}.${(d.getMonth() + 1)}.${d.getDate()}`
      } else {
        return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.article-info {
  margin: 15px 0 25px;
}

.publish-date {
  font-size: 15px;
  margin-right: 10px;
}

.tag-list {
  display: inline-block;
  list-style: none;
  padding: 0;

  &__item {
    display: inline-block;

    a {
      padding: 3px 5px;
      margin-right: 5px;
      background-color: #eee;
      color: #3eaf7c;
      font: normal 13px monospace;
      line-height: 1em;
      display: inline-block;
    }
  }
}
</style>
