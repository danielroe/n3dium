<script setup lang="ts">
const { $auth } = useNuxtApp()
const error = ref()
const loading = ref(false)
async function handleLogin(e: Event) {
  try {
    error.value = null
    loading.value = true
    await $auth.login(
      Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
    )
    await navigateTo('/')
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div
        v-if="error"
        class="border-2 border-red-300 bg-red-900 px-2 py-1 mb-4 rounded"
      >
        {{ error.message }}
      </div>
      <label>
        User name:
        <input name="username" type="text" required placeholder="vue" />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          required
          placeholder="ilovenuxt"
        />
      </label>
      <button :aria-busy="loading">Login</button>
    </form>
  </div>
</template>
