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

              <!-- Skill Icons -->

        <div class="flex justify-around items-center flex-wrap p-2 lg:p-0 justify-items max-w-max mx-auto">

          <KeySkill title="Fast" text="Websites butildt effeciently"/>

        </div>
         <!-- Other Skill -->
      <!-- <SkillsCarousel /> -->

      <div class="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center max-w-max mx-auto">

        <!-- My Skills Text-->
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

}
</script>

<style>

</style>