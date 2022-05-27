<script setup lang="ts">
const { data: articles } = await useAsyncData(
  'articles',
  () =>
    queryContent('/articles').only(['title', 'description', '_path']).find(),
  { server: false }
)
</script>

<template>
  <div>
    <h1>Some great articles you'll want to read</h1>
    <article v-for="article in articles" :key="article._path">
      <header>{{ article.title }}</header>
      {{ article.description }}
      <NuxtLink :to="article._path">Read more &raquo;</NuxtLink>
    </article>
  </div>
</template>
