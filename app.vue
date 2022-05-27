<template>
  <div class="flex flex-col gap-4 px-4 items-center justify-center">
    <Html lang="en-GB" />
    <Title>n3dium</Title>
    <Meta
      name="description"
      content="A tiny, incomplete example for a paywalled content site built in Nuxt 3 for a live-coding session at Vue.js Global Summit 2022."
    />
    <header class="w-full max-w-[960px]">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" class="flex items-center gap-2 text-green-400">
              <img
                alt="Nuxt logo"
                src="https://nuxtjs.org/design-kit/colored-logo.svg"
                height="24"
                width="24"
              />
              <strong>n3dium</strong>
            </NuxtLink>
          </li>
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
    <footer>
      <small>
        Made with ❤️ &middot;
        <a href="https://github.com/danielroe/n3dium">Contributions welcome</a>
      </small>
    </footer>
  </div>
</template>

<script setup>
import '@picocss/pico'
</script>

<style>
/* Blue-grey Light scheme (Default) */
/* Can be forced with data-theme="light" */
[data-theme='light'],
:root:not([data-theme='dark']) {
  --primary: #546e7a;
  --primary-hover: #455a64;
  --primary-focus: rgba(84, 110, 122, 0.125);
  --primary-inverse: #fff;
}
/* Blue-grey Dark scheme (Auto) */
/* Automatically enabled if user has Dark mode enabled */
@media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --primary: #546e7a;
    --primary-hover: #607d8b;
    --primary-focus: rgba(84, 110, 122, 0.25);
    --primary-inverse: #fff;
  }
}
/* Blue-grey Dark scheme (Forced) */
/* Enabled if forced with data-theme="dark" */
[data-theme='dark'] {
  --primary: #546e7a;
  --primary-hover: #607d8b;
  --primary-focus: rgba(84, 110, 122, 0.25);
  --primary-inverse: #fff;
}
/* Blue-grey (Common styles) */
:root {
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
}
</style>
