<template>
<main class="font-inter text-primary-100 bg-theme-primary p-6 md:p-12 lg:px-20 xl:px-40">
  <AppNav />
  <Home />
  <About />
  <Experience />
</main>
</template>

<script>
import Experience from '../components/Experience.vue'
export default {
  components: { Experience },}
</script>
