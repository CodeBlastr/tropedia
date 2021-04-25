<template>
  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-2 mb-0">
      Recent Articles
    </h6>
    <div v-for="a in articles" :key="a._id" class="media text-muted pt-3">
      <img data-src="" alt="" class="mr-2 rounded">
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <nuxt-link :to="getArticleRoute(a)">
          <strong class="d-block text-gray-dark">{{ a.title }}</strong>
        </nuxt-link>
        {{ a.description }}
      </p>
    </div>
    <small class="d-block text-right mt-3">
      <a href="#">All updates</a>
    </small>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  async fetch () {
    this.articles = await this.$strapi.find('articles', { _limit: 5, _sort: 'published_at:desc' })
  },
  computed: {
    isAuthenticated () {
      return this.$strapi.user != null
    },
    user () {
      return (this.isAuthenticated) ? this.$strapi.user : null
    }
  },
  activated () {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  methods: {
    getArticleRoute (article) {
      return `/articles/${article.slug}`
    }
  }
}
</script>
