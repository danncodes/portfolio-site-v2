<template>
  <main class="min-h-screen flex duration-200 pt-24 p-6 md:p-12 lg:px-20 xl:px-40 items-center">
    <section class="flex flex-col w-max lg:mx-10 xl:mx-20 h-4/5 justify-center duration-200">

      <AppSectionHeader title="Welcome" />
      <h3 class="font-medium text-2xl md:text-3xl lg:text-4xl duration-200 mb-3 text-primary-200">Hi I am</h3>
      <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl duration-200 text-secondary dark:text-primary-100">Daniel Mensah.</h1>
      <p class="mt-5 max-w-lg duration-200 text-primary-200">I am a Software Engineer at <span class="font-fira text-secondary">PersonifyXP</span> in London. I have a serious passion for building frontend architecture, dynamic user experiences and developing complex web applications.</p>
      <a href="#contact" class="w-[230px] duration-200">
        <AppButton text="Get in Touch!"  class="w-full mt-12"/>
      </a>
    </section>
    <BackgroundRing customClasses="h-24 sm:h-48 md:h-64 lg:h-96 right-0 bottom-0"/>

    <canvas class="background"></canvas>

  </main>
</template>

<script>
export default {
  mounted(){
    Particles.init({
    selector: '.background',
    color: '#FFFFFF',
    maxParticles: 30,
    sizeVariations:25,
    speed: 1,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 320,
        options: {
          maxParticles: 10
        }
      },
      {
        breakpoint: 375,
        options: {
          maxParticles: 12
        }
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 15
        }
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 20,
          sizeVariations:30,
        }
      },
    ]
    });
  }



}
</script>

<style scoped>
.background {
position:absolute;
display:block;
top: 0;
left: 0;
z-index: 0;
pointer-events: none;
opacity: 0.1;
}
</style>