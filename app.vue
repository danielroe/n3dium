<template>
  <div class="flex flex-col gap-4 px-4 items-center justify-center">
    <header class="w-full max-w-[960px]">
      <nav>
        <ul>
          <li><NuxtLink to="/">n3dium</NuxtLink></li>
        </ul>
        <ul>
          <li>
            <NuxtLink v-if="!$auth.loggedIn.value" to="/login" role="button">
              Log in
            </NuxtLink>
            <button v-else @click="$auth.logout">Log out</button>
          </li>
        </ul>
      </nav>
    </header>
    <main class="w-full max-w-[960px]">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import '@picocss/pico'
</script>
