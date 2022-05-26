<script setup lang="ts">
const { $auth } = useNuxtApp()
const error = ref()
const loading = ref(false)
async function handleLogin(e: Event) {
  try {
    loading.value = true
    await $auth.login(
      Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
    )
    await navigateTo('/')
  } catch (e) {
    error.value = 2
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <label>
        User name:
        <input name="username" type="text" required placeholder="vuejsglobal" />
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
