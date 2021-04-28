<template>
  <b-container>
    <div class="my-3 p-3 bg-white rounded shadow">
      <h4 class="border-bottom border-gray pb-2 mb-0">
        Search: {{ searchText }}
      </h4>
      <div v-for="a in articles" :key="a._id" class="media text-muted pt-3">
        <img data-src="" alt="" class="mr-2 rounded">
        <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
          <nuxt-link :to="getArticleRoute(a)">
            <strong class="d-block text-gray-dark">{{ a.title }}</strong>
          </nuxt-link>
          {{ a.description }}
        </p>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  async fetch () {
    this.articles = await this.$strapi.find('articles', { _limit: 50, _q: this.searchText })
  },
  computed: {
    searchText () {
      return this.$route.query.text
    }
  },
  watch: {
    async searchText (value) {
      await this.$fetch()
    }
  },
  methods: {
    getArticleRoute (article) {
      return `/articles/${article.slug}`
    }
  }
}
</script>
