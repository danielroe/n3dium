<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(
  `title-${route.params.slug}`,
  () => queryContent(route.path).only(['title']).findOne(),
  { server: false }
)
</script>

<template>
  <div v-if="data">
    <h1>{{ data.title }}</h1>
    <ContentDoc />
  </div>
</template>
