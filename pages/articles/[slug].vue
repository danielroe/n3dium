<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(`title-${route.params.slug}`, () =>
  queryContent(route.path).only(['title']).findOne()
)
</script>

<template>
  <div>
    <h1>{{ data.title }}</h1>
    <ContentDoc />
  </div>
</template>
