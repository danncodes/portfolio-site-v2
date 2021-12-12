<template>
  <main class="w-full flex flex-col justify-center py-4 items-center shadow-md bg-theme-secondary bg-opacity-40 backdrop-blur-2xl relative">

    <i class="fas fa-arrow-alt-circle-up text-5xl absolute right-4 -top-1/4 shadow text-primary-200 hover:text-secondary duration-300 cursor-pointer" @click="backToTop"></i>

    <h2 class="text-center text-xs text-primary-200">Handcrafted by Daniel Mensah</h2>
    <div class="flex my-2">
      <a href="https://www.linkedin.com/in/daniel-osei-mensah/" target="_blank">
        <i class="fab fa-linkedin text-2xl text-primary-200 hover:text-secondary duration-300"></i>
      </a>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    backToTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

}
</script>

<style>

</style>