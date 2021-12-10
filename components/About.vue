<template>
  <main id="about" class="min-h-screen py-24 relative p-6 md:p-12 lg:px-20 xl:px-40">
    <section class="max-w-4xl mx-auto">
      <AppSectionHeader number ="01." title="About Me"/>
      <div class="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center gap-x-2">
        <ul class="max-w-xl">
          <li class="mb-4">I am a fulltime software developer based in the United Kingdom and i have been commercially building noteworthy websites and applications for years, which comply with the latest design trends.</li>
          <li class="mb-4"> I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</li>
          <li class="mb-4">Here are a few technologies I’ve been working with recently:</li>
        </ul>
        <figure class="h-72 min-w-[13rem] max-w-[13rem] mt-12 sm:mt-0 mx-auto bg-gray-100">
        </figure>
      </div>
    </section>

    <section class="my-12">
      <div class="flex items-center mb-7 ml-1">
        <hr class="w-4 mr-4 border-[#59e4a0] border-1">
        <h6 class="text-secondary font-fira duration-200 text-xs">My Skills</h6>
      </div>

      <div class="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center lg:w-10/12">

        <!-- My Skills Text-->
        <div class="w-full px-8 lg:max-w-sm">
          <h3 class="font-medium text-2xl md:text-3xl duration-200 mb-3 text-center">Why Hire Me For Your Next Project?</h3>
          <p class="mt-5 duration-200 text-center sm:w-9/12 lg:w-full mx-auto">I’m a software engineer resposible for implementing user interfaces/features using Javascript. Building user ecoeriences 
        Creating UIs using Vue.js Blah Blah</p>

        <a href="#contact" class="font-fira flex justify-center my-12 text-secondary animate-bounce">
          <h4>Get In Touch</h4>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
        </a>
      

        </div>

        <!-- Skill Icons -->

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 lg:gap-5 p-2 lg:p-0 justify-items-center max-w-max mx-auto">

          <KeySkill />
          <KeySkill />
          <KeySkill />
          <KeySkill />

        </div>
      </div>

      <!-- Other Skill -->
      <SkillsCarousel />
    </section>
    <!-- <BackgroundRing customClasses="h-24 sm:h-48 md:h-64 lg:h-96 left-0 bottom-0 rotate-180"/> -->
  </main>
</template>

<script>
export default {

}
</script>

<style>

</style>