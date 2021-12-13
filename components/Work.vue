<template>
  <main id="work" class="pt-24 p-6 md:p-12 lg:px-20 xl:px-40 relative my-12">
    <section class="mx-auto">
        <AppSectionHeader title="Personal Projects"/>

      <div class="my-12 flex flex-col gap-y-3 lg:grid lg:grid-cols-3 lg:gap-x-3 w-full">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
      </div>

    </section>
    <BackgroundCircle customClasses="h-24 sm:h-48 md:h-64 lg:h-96 left-0 bottom-0 rotate-180"/>
  </main>
</template>

<script>
export default {
  data(){
    return {
      projects: [
        {id: 1, title: "TMDB Movie App", img: require("../static/movieApp.png"), liveLink: "https://musing-lumiere-fd4fae.netlify.app/", githubLink: ""},
        {id: 2, title: "Nuxt Marketing Site", img: require("../static/marketingSite.png"), liveLink: "https://musing-hopper-ae79fc.netlify.app/", githubLink: ""},
        {id: 3, title: "Journal Web Application", img: require("../static/journalApp.png"), liveLink: "https://focused-benz-ce4068.netlify.app/", githubLink: ""}
        ]
    }
  }

}
</script>

<style>

</style>