<script setup lang="ts">
const { data: articles } = await useAsyncData(
  'articles',
  () =>
    queryCollection('articles').select('title', 'description', 'path').all(),
  { server: false }
)
</script>

<template>
  <div>
    <h1>Some great articles you'll want to read</h1>
    <article v-for="article in articles" :key="article.path">
      <header>{{ article.title }}</header>
      {{ article.description }}
      <NuxtLink :to="article.path">Read more &raquo;</NuxtLink>
    </article>
  </div>
</template>
