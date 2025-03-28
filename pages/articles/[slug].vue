<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(
  `title-${route.params.slug}`,
  () => queryCollection('articles').path(route.path).first(),
  { server: false }
)
</script>

<template>
  <div v-if="data">
    <h1>{{ data.title }}</h1>
    <ContentRenderer :value="data" />
  </div>
</template>
