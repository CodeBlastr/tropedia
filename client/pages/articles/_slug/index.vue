<template>
  <b-container class="mt-5">
    <div v-if="article">
      <h1 class="title">
        {{ article.title }}
      </h1>
      <p class="mt-5 font-bold">
        written by {{ article.author.username }}
      </p>
      <div class="my-5" v-html="$md.render(article.content)" />
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      article: null
    }
  },
  async fetch () {
    const articles = await this.$strapi.find('articles', { slug: this.$route.params.slug })
    this.article = (articles.length > 0) ? articles[0] : null
  }
}
</script>
