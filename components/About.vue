<template>
  <main id="about" class="min-h-screen py-24 relative p-6 lg:px-20 xl:px-40">
    <section class="max-w-4xl mx-auto">
      <div class="flex flex-col justify-center gap-x-2">
        <AppSectionHeader title="About Me"/>
        <!-- About me Text -->
        <ul class="max-w-xl text-primary-200 mx-auto">
          <li class="mb-4">I enjoy working in collaborative environments where I am encouraged to grow as a full-stack developer.</li>
          <li class="mb-4"> I am currently completing my level 4 Software Engineering apprenticeship at a London based start-up company Personify XP, where I have been able to develop a range of different features for their live client sites.</li>
        </ul>
      </div>
    </section>

    <section class="my-12">
      
      <div class="grid grid-cols-2 sm:grid-cols-4 flex-wrap p-2 lg:p-0 max-w-max mx-auto">
        <KeySkill :icon="require('../static/'+ skill.icon + '.png')" :title="skill.title" :text="skill.text" v-for="skill in keySkills" :key="skill.title"/>
      </div>
      
    <!-- <SkillsCarousel /> -->


      <!-- Get In Touch CTA-->
      <div class="flex flex-col max-w-max mx-auto">
        <div class="w-full px-8 lg:max-w-sm">
          <a href="#contact" class="font-fira flex justify-center my-12 text-secondary animate-bounce">
            <h4>Get In Touch</h4>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
    <BackgroundRing customClasses="h-24 sm:h-48 md:h-64 lg:h-96 left-0 bottom-96 rotate-180"/>
  </main>
</template>

<script>
export default {
  data(){
    return {
      keySkills: [
        {icon:"timer", title: "Fast", text: "Fast and Lag free", },
        {icon:"responsive", title: "Responsive", text: "Scalable Web Apps", },
        {icon:"select", title: "Intuitive", text: "Simple and Intuitive UI/UX", },
        {icon:"dynamic", title: "Dynamic", text: "Websites that come to life", }
        ]
    }
  }

}
</script>

<style>

</style>