<template>
<main class="font-inter text-primary-100 dark:bg-theme-primary">
  <AppNav />
  <Home />
  <About />
  <Experience />
  <Work />
  <Contact />
  <Footer />
</main>
</template>

<script>

export default {
  head() {
      return {
        title: "Daniel Mensah",
        meta: [
          {
            name: 'Developer Portfolio',
            content: 'Daniel Mensah Software Engineer Portolio'
          }
        ]
      }
  }

}
</script>
