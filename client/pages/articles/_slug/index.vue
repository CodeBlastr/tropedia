<template>
  <b-container class="mt-2">
    <div v-if="article" class="my-3 p-3 bg-white rounded shadow">
      <h1 class="title">
        {{ article.title }}
      </h1>
      <div class="mt-2 main-img-container">
        <img
          v-if="article.image"
          :src="`http://localhost:1337${article.image.url}`"
          class="main-img"
        >
      </div>

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

<style>

.main-img {
  object-fit: cover;
  height: 600px;
  width:max-content;
}

</style>
